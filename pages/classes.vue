<template>
  <div>
    <ApplicationHandler
      ref="handleAction"
      @newClass="addClass"
    ></ApplicationHandler>
    <DeleteModal
      ref="updateAction"
      file="class"
      @confirmDelete="deleteClass"
    ></DeleteModal>

    <el-row :gutter="10" class="mb-2 mt-20">
      <el-col :sm="21" :md="21">
        <div class="d-flex">
          <el-input
            v-model="search"
            placeholder="Search classes by name"
            class="search_input_width"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button
              slot="append"
              icon="el-icon-arrow-down"
              @click="showFilter = !showFilter"
            ></el-button>
          </el-input>
        </div>

        <!-- filters -->
        <div class="filter_div mt-40 ml-15">
          <el-collapse-transition>
            <div v-show="showFilter" class="d-flex_justify_between">
              <div>
                <div>
                  <span class="mr-10">Location</span>
                  <el-select
                    v-model="queryParams.location"
                    filterable
                    placeholder="Filter by location"
                    size="mini"
                  >
                    <el-option
                      label="Causeway Bay"
                      value="Causeway Bay"
                    ></el-option>
                  </el-select>
                </div>

                <div class="mt-20">
                  <span class="mr-10">Capacity</span>
                  <el-input-number
                    v-model="queryParams.capacity"
                    size="small"
                    controls-position="right"
                    :min="1"
                    :max="20"
                  />
                </div>
              </div>

              <div>
                <div>
                  <span class="mr-10">Trainer</span>
                  <el-select
                    v-model="queryParams.trainer"
                    filterable
                    placeholder="Filter by trainer"
                    size="mini"
                  >
                    <el-option label="Kai Tai" value="Kai Tai"></el-option>
                  </el-select>
                </div>

                <div class="mt-20">
                  <span class="mr-10">Promotion</span>
                  <el-select
                    v-model="queryParams.promotion"
                    placeholder="Filter by trainer"
                    size="mini"
                  >
                    <el-option label="20%" :value="20"></el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </el-collapse-transition>
        </div>
      </el-col>

      <el-col :sm="3" :md="3">
        <el-button icon="el-icon-plus" type="primary" @click="addClassModal">
          Add a Class
        </el-button>
      </el-col>
    </el-row>

    <el-card class="mt-40">
      <el-table
        v-loading="tableLoading"
        :data="classesData"
        stripe
        :default-sort="{ prop: 'capacity', order: 'descending' }"
      >
        <el-table-column type="expand">
          <template #default="props">
            <p><b>Description:</b> {{ props.row.description }}</p>
            <p class="mt-20">
              <b>Facility: </b> <span>{{ props.row.facility.name }}</span>
            </p>
            <p class="mt-20">
              <b>Type:</b>
              <el-tag type="info" size="small">
                <b> {{ props.row.classType }}</b>
              </el-tag>
            </p>
            <p class="mt-20"><b>Level:</b> {{ props.row.level }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="capacity" label="Capacity" sortable>
        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="trainers" label="Trainers">
          <template slot-scope="props">
            <el-tag v-for="trainer in props.row.trainers" :key="trainer.id">
              {{ trainer.first_name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Category">
          <template slot-scope="props">
            <el-tag v-for="category in props.row.category" :key="category.id">
              {{ category.name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Schedule">
          <template slot-scope="props">
            <el-button
              size="mini"
              type="text"
              @click="viewClassSchedule(props.row._id)"
              >View Schedule</el-button
            >
          </template>
        </el-table-column>

        <el-table-column>
          <template slot-scope="props">
            <el-tooltip
              class="item"
              effect="dark"
              content="Edit Class"
              placement="top"
            >
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteClassModal(props.row._id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div class="mt-40 center pb-10">
      <el-pagination
        background
        :page-sizes="[15, 30, 50]"
        :page-size="15"
        layout="prev, pager, next, sizes, total"
        :total="10"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Classes',

  data() {
    return {
      search: '' as string,
      classesData: [] as Array<object>,
      tableLoading: true as boolean,
      showFilter: false as boolean,
      classId: '' as string,
      queryParams: {
        location: '' as string,
        trainer: '' as string,
        capacity: Number,
        promotion: 0 as number,
      },
    }
  },
  async fetch() {
    try {
      const classes = await this.$classApi.index()
      this.classesData = classes.data
      console.log(classes)
      this.tableLoading = false
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    viewClassSchedule(classId: string): void {
      console.log(classId)
    },
    deleteClassModal(classId: string): void {
      this.classId = classId
      ;(this as any).$refs.updateAction.open()
    },
    addClassModal(): void {
      ;(this as any).$refs.handleAction.showAddClassModal()
    },
    addClass(): void {
      // this.$classApi.create().then(() => this.$fetch)
    },
    deleteClass(): void {
      this.$classApi.delete(this.classId).then(() => this.$fetch)
    },
  },
})
</script>

<style lang="scss" scoped>
.filter_div {
  width: 60%;
}
</style>

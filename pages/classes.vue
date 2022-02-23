<template>
  <div>
    <ApplicationHandler ref="handleAction"></ApplicationHandler>
    <div class="d-flex_justify_center">
      <el-input
        v-model="search"
        placeholder="Please input"
        class="search_input_width"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <span> <i class="el-icon-sort"></i></span>
    </div>

    <div></div>

    <div class="mb-2 d-flex_justify-between mt-40">
      <h3>Classes <i class="el-icon-circle-plus-outline"></i></h3>

      <el-button icon="el-icon-plus" type="primary" @click="addClass">
        Add a Class
      </el-button>
    </div>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="classesData" stripe>
        <el-table-column type="expand">
          <template #default="props">
            <p><b>Description:</b> {{ props.row.description }}</p>
            <p class="mt-20">
              <b>Facility: </b> <span>{{ props.row.facility.name }}</span>
            </p>
            <p class="mt-20">
              <b>Type:</b>
              <el-tag type="info" effect="plain" size="small">
                {{ props.row.classType }}
              </el-tag>
            </p>
            <p class="mt-20"><b>Level:</b> {{ props.row.level }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="capacity" label="Capacity"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
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
              @click="deleteClass(props.row._id)"
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
const ApplicationHandler = () => import('../handlers/ApplicationHandler.vue')

export default Vue.extend({
  name: 'Classes',
  components: {
    ApplicationHandler,
  },
  data() {
    return {
      search: '',
      classesData: [],
      tableLoading: true,
    }
  },
  async fetch() {
    try {
      const classes = await this.$classApi.index()
      this.classesData = classes.data
      this.tableLoading = false
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    viewClassSchedule(classId: string): void {
      console.log(classId)
    },
    deleteClass(classId: String): void {
      console.log(classId)
    },
    addClass(): void {
      this.$refs.handleAction.showAddClassModal()
    },
  },
})
</script>

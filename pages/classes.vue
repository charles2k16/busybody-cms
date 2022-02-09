<template>
  <div>
    <div class="d-flex_justify_center">
      <el-input v-model="search" placeholder="Please input" class="input-width">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <span> <i class="el-icon-sort"></i></span>
    </div>

    <div></div>

    <div class="mb-2 d-flex_justify-between mt-40">
      <h2>Classes <i class="el-icon-circle-plus-outline"></i></h2>

      <el-button
        icon="el-icon-plus"
        plain
        size="mini"
        @click="showAddClassModal = true"
      >
        Add a Class
      </el-button>
    </div>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="classesData" stripe>
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>Description: {{ props.row.description }}</p>
            <p>Type: {{ props.row.classType }}</p>
            <p>Level: {{ props.row.level }}</p>
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
            <el-button size="mini" @click="viewClassSchedule(props.row._id)"
              >View Schedule</el-button
            >
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

    <!-- add new enquiry dialog -->
    <el-dialog
      :visible.sync="showAddClassModal"
      width="40%"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h2>Add Classes & Facilities</h2>
        <p>All fields should be filled for accurate class filtering.</p>
      </template>
      <AddClasses />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Classes',
  data() {
    return {
      search: '',
      classesData: [],
      tableLoading: true,
      title: 'Classes (1)',
      showAddClassesModal: false,
      showAddClassModal: false,
    }
  },
  async fetch() {
    try {
      const classes = await this.$classApi.index()
      this.classesData = classes.data
      console.log(this.classesData)
      this.tableLoading = false
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    viewClassSchedule(classId: string) {
      console.log(classId)
    },
  },
})
</script>

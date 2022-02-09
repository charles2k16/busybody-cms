<template>
  <div>
    <el-form ref="classDetails" label-position="left" :model="classDetails">
      <!-- <div class="d-flex_align_center">
        <span>Categories</span>

        <div class="d-flex_justify-between">
          <div
            v-for="(category, index) in classCategories"
            :key="index"
            class="d-flex_column_center mr-20"
          >
            <span class="category_circles"></span>
            <span class="d-block">{{ category.name }}</span>
          </div>
        </div>


      </div> -->

      <el-form-item label="Category" prop="category">
        <el-select v-model="classDetails.category">
          <el-option
            v-for="(category, index) in classCategories"
            :key="index"
            :label="category.name"
            :value="category.name"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Class Name" prop="name">
        <el-input
          v-model="classDetails.name"
          placeholder="Fitness Centre 320-321SM"
        />
      </el-form-item>

      <el-form-item label="Description" prop="description">
        <el-input
          v-model="classDetails.description"
          type="textarea"
          placeholder="Fitness Centre 320-321SM"
        />
      </el-form-item>

      <el-row :gutter="10">
        <el-col :span="10">
          <el-form-item label="Capacity" prop="capacity">
            <el-input v-model="classDetails.capacity" type="number" />
          </el-form-item>
        </el-col>

        <el-col :span="14">
          <el-form-item label="Level" prop="level">
            <el-select v-model="classDetails.level">
              <el-option label="all levels" value="all levels"></el-option>
              <el-option label="beginer" value="beginer"></el-option>
              <el-option label="advanced" value="advanced"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddClasses',
  data() {
    return {
      classDetails: {
        name: '',
        description: '',
      },
      classCategories: [],
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    async getCategories(): Promise<any> {
      try {
        const categories = await this.$categoriesApi.index()
        this.classCategories = categories.data
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>

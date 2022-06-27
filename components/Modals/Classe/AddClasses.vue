<template>
  <div>
    <el-form ref="classDetails" :model="classDetails" label-position="top">
      <el-tabs v-model="activeTab" class="mt-4 px-2" stretch type="border-card">
        <el-tab-pane name="details">
          <span slot="label"
            ><i class="el-icon-document-copy mr-5"></i> Class Details</span
          >
          <el-form-item prop="name">
            <el-input
              v-model="classDetails.name"
              placeholder="Class Name (320-321SM)"
            />
          </el-form-item>

          <el-form-item prop="description">
            <el-input
              v-model="classDetails.description"
              type="textarea"
              rows="3"
              placeholder="Class Description"
            />
          </el-form-item>
          <el-row :gutter="10" class="mt-20">
            <el-col :span="22">
              <el-form-item prop="category">
                <el-select
                  v-model="classDetails.category"
                  multiple
                  placeholder="Select Category"
                  class="full_width mr-30"
                >
                  <el-option
                    v-for="(category, index) in classCategories"
                    :key="index"
                    :label="category.name"
                    :value="category._id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-tooltip
                class="item"
                effect="dark"
                content="Add Category"
                placement="top"
              >
                <el-button
                  type="primary"
                  icon="el-icon-plus"
                  circle
                  @click="addCategory"
                ></el-button>
              </el-tooltip>
            </el-col>
          </el-row>

          <el-row :gutter="10" class="mt-20">
            <el-col :md="22" :xs="24" :sm="24">
              <el-form-item prop="facility">
                <el-select
                  v-model="classDetails.facility"
                  filterable
                  placeholder="Select a Facility"
                  class="full_width"
                >
                  <el-option
                    v-for="(facility, index) in facilities"
                    :key="index"
                    :label="facility.name"
                    :value="facility._id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="2" :xs="24" :sm="24">
              <el-tooltip
                class="item"
                effect="dark"
                content="Add Facilities"
                placement="top"
              >
                <el-button
                  type="primary"
                  icon="el-icon-plus"
                  circle
                  @click="addCategory"
                ></el-button>
              </el-tooltip>
            </el-col>
          </el-row>

          <el-row :gutter="10" class="mt-20">
            <el-col :md="22" :xs="24" :sm="24">
              <el-form-item prop="trainers">
                <el-select
                  v-model="classDetails.trainers"
                  filterable
                  placeholder="Select a Trainer"
                  class="full_width"
                >
                  <el-option
                    v-for="(trainer, index) in trainers"
                    :key="index"
                    :label="getFullName(trainer.first_name, trainer.last_name)"
                    :value="trainer._id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="2" :xs="24" :sm="24">
              <el-tooltip
                class="item"
                effect="dark"
                content="Add Trainers"
                placement="top"
              >
                <el-button
                  type="primary"
                  icon="el-icon-plus"
                  circle
                  @click="addCategory"
                ></el-button>
              </el-tooltip>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :md="10" :xs="24" :sm="24">
              <el-form-item prop="capacity" label="Capacity">
                <el-input-number
                  v-model="classDetails.capacity"
                  class="classes_input"
                  controls-position="right"
                  :min="1"
                  :max="20"
                />
              </el-form-item>
            </el-col>

            <el-col :md="14" :xs="24" :sm="24">
              <el-form-item prop="level" label="Class Level">
                <el-select v-model="classDetails.level" class="full_width">
                  <el-option label="All levels" value="all levels"></el-option>
                  <el-option label="Beginner" value="beginner"></el-option>
                  <el-option
                    label="Intermediate"
                    value="intermediate"
                  ></el-option>
                  <el-option label="Advanced" value="advanced"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :md="12" :xs="24" :sm="24">
              <el-form-item label="Class Type" prop="classType">
                <el-radio-group v-model="classDetails.classType">
                  <el-radio-button label="Onsite">Onsite</el-radio-button>
                  <el-radio-button label="Online">Online</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :md="12" :xs="24" :sm="24">
              <el-form-item label="Price / Eligibility" prop="singlePrice">
                <el-radio-group v-model="classDetails.singlePrice">
                  <el-radio-button :label="true">One time</el-radio-button>
                  <el-radio-button :label="false">Recurring</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="30">
            <el-col :md="12" :xs="24" :sm="24">
              <el-form-item
                v-if="classDetails.classType == 'Online'"
                label="Online URL"
              >
                <el-input
                  v-model="classDetails.onlineUrl"
                  type="text"
                  placeholder="youtube, zoom link, google meet"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="10" :xs="20" :sm="20">
              <el-form-item
                v-if="classDetails.singlePrice"
                label="Single Price"
              >
                <el-input v-model="classDetails.price" type="number"></el-input>
                <p>
                  Clients ad drop in in clients ca attend for the price entered
                </p>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- class images -->
          <!-- <el-row :gutter="10" class="mt-20">
            <el-col :md="24" :xs="24" :sm="24">
              <label class="mb-10 d-block">Class Images</label>
              <ImageUpload />
            </el-col>
          </el-row> -->
        </el-tab-pane>

        <!-- Schedule Info -->

        <!-- Budget Info -->
        <el-tab-pane name="schedule">
          <span slot="label"><i class="el-icon-timer"></i> Schedule Info</span>
          <Schedule @schedules="getSchedules" />
        </el-tab-pane>
      </el-tabs>
      <div style="display: flex; justify-content: flex-end; margin-top: 20px">
        <el-button type="primary" :loading="loading" @click="submitClass"
          >Submit</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IClassState } from '@/types'
import { IMixinState } from '@/types/mixinsTypes'

export default Vue.extend({
  name: 'AddClasses',
  data(): IClassState {
    return {
      classDetails: {
        name: '',
        description: '',
        capacity: 0,
        level: '',
        classType: '',
        singlePrice: false,
        price: 0,
        onlineUrl: '',
        category: [],
        facility: '',
        trainers: [],
        images: [''],
        schedules: [],
      },
      loading: false,
      classCategories: [],
      facilities: [],
      trainers: [],
      activeTab: 'details',
      queryParams: {
        page: 1 as number,
        limit: 20 as number,
      },
    }
  },
  async fetch() {
    const categories = await this.$categoriesApi.index()
    const facilities = await this.$facilitiesApi.index()
    const trainers = await this.$rolesApi.userTypes(
      'trainers',
      this.queryParams
    )

    this.classCategories = categories.data
    this.facilities = facilities.data
    this.trainers = trainers.data
  },
  methods: {
    addCategory() {
      const namew = (this as any as IMixinState).getFullName('ghss', 'errdd')
      console.log(namew)
    },
    getSchedules(schedules: Array<object>) {
      this.classDetails.schedules = schedules
    },
    submitClass() {
      this.loading = true
      this.$emit('closeClassModal')
      this.$classApi
        .create(this.classDetails)
        .then((res) => {
          console.log(res)
          this.loading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
</script>

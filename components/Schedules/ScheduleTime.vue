<template>
  <div style="padding-bottom: 20px">
    <div>
      <el-row class="time_container">
        <el-row>
          <el-time-select
            v-model="startTime"
            placeholder="Start time"
            class="time_lapse"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
          >
          </el-time-select>
          <el-time-select
            v-model="endTime"
            placeholder="End time"
            class="time_lapse"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: startTime,
            }"
          >
          </el-time-select>
        </el-row>
        <div class="icons">
          <el-button type="default" class="add_icon" @click="showTrainerDetails"
            ><i class="el-icon-s-tools"></i
          ></el-button>
          <slot name="delete"></slot>
        </div>
      </el-row>
    </div>
    <div v-if="showDetails" class="schedule_details">
      <el-form ref="form" :model="form">
        <el-form-item label="location">
          <el-select
            v-model="form.location"
            placeholder="please select location"
            class="form"
          >
            <el-option
              label="B Squared Yoga and Dance Studio Causeway Bay"
              value="B Squared Yoga and Dance Studio Causeway Bay"
            ></el-option>
            <el-option
              label="B Squared Yoga and Dance Studio Fo Tan"
              value="B Squared Yoga and Dance Studio Fo Tan"
            ></el-option>
            <el-option
              label="BusyBody Fitness Centre 320-321SM"
              value="BusyBody Fitness Centre 320-321SM"
            ></el-option>
            <el-option
              label="BusyBody Fitness Centre 630SM"
              value="BusyBody Fitness Centre 630SM"
            ></el-option>
            <el-option
              label="Outdoor Yoga @ Mongkok"
              value="Outdoor Yoga @ Mongkok"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Levels">
          <el-select
            v-model="form.level"
            class="form"
            placeholder="please select your level"
          >
            <el-option label="All Levels" value="All Levels"></el-option>
            <el-option label="Zone two" value="Mixed Levels"></el-option>
            <el-option label="Beginner" value="Beginner"></el-option>
            <el-option label="Intermediate" value="Intermediate"></el-option>
            <el-option label="Advanced" value="Advanced"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Trainers">
          <el-select
            v-model="form.trainer"
            class="form"
            placeholder="please select your trainer(s)"
          >
            <!-- <el-transfer v-model="form.trainers" :data="trainers">
            </el-transfer> -->
            <el-option label="Ally Lee" value="Ally Lee"></el-option>
            <el-option label="Amanda Lee" value="Amanda Lee"></el-option>
            <el-option
              label="Antony Isabella"
              value="Antony Isabella"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Capacity">
          <el-input
            v-model="form.capacity"
            type="numbers"
            class="form"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Private"
          style="display: flex; flex-direction: column; align-items: center"
        >
          <el-switch v-model="form.private"></el-switch>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ScheduleTime',
  props: {
    day: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      startTime: '' as string,
      endTime: '' as string,
      showDetails: false as boolean,
      trainers: [
        { key: 1, label: 'Ally Lee' },
        { key: 2, label: 'Amanda Lee' },
        { key: 3, label: 'Antony Isabella' },
      ],
      form: {
        location: '' as string,
        level: '' as string,
        trainer: '' as string,
        trainers: [] as Array<object>,
      },
    }
  },
  methods: {
    showTrainerDetails() {
      this.showDetails = !this.showDetails
    },
  },
})
</script>

<style lang="scss" scoped>
.time_container {
  display: flex;
}

.schedule_details {
  padding-top: 10px;
}

.form {
  width: 100%;
}

.icons {
  display: flex;
  flex-direction: column;
  // padding: 10px 0;
  .add_icon {
    padding: 5px;
    margin-left: 8px;
    margin-bottom: 5px;
  }
  i {
    padding: 0 5px;
    font-size: 20px;
  }
}
</style>

<template>
  <div>
    <el-row>
      <span>Select Day</span>
      <el-row class="all_days">
        <el-button class="all" size="mini" @click="showSun">SUN</el-button>
        <el-button class="all" size="mini" @click="showMon">MON</el-button>
        <el-button class="all" size="mini" @click="showTues">TUES</el-button>
        <el-button class="all" size="mini" @click="showWed">WED</el-button>
        <el-button class="all" size="mini" @click="showThurs">THURS</el-button>
        <el-button class="all" size="mini" @click="showFri">FRI</el-button>
        <el-button class="all" size="mini" @click="showSat">SAT</el-button>
      </el-row>
    </el-row>
    <div v-if="day.SUN.isDay">
      <div v-if="day.SUN.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">SUN</span></p>
        <div v-for="(schedule, index) in day.SUN.schedule" :key="index">
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.SUN)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>
        <el-button type="success" class="add_icon" @click="addTime(day.SUN)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
    <div v-if="day.MON.isDay">
      <div v-if="day.MON.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">MON</span></p>
        <div
          v-for="(schedule, index) in day.MON.schedule"
          :key="`input-${index}`"
        >
          {{ index }}
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.MON)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>
        <el-button type="success" class="add_icon" @click="addTime(day.MON)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
    <div v-if="day.TUES.isDay">
      <div v-if="day.TUES.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">TUES</span></p>
        <div
          v-for="(schedule, index) in day.TUES.schedule"
          :key="index"
          :index="index"
          @remove="removeTime"
        >
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.TUES)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>
        <el-button type="success" class="add_icon" @click="addTime(day.TUES)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
    <div v-if="day.WED.isDay">
      <div v-if="day.WED.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">WED</span></p>
        <div
          v-for="(schedule, index) in day.WED.schedule"
          :key="index"
          :index="index"
          @remove="removeTime"
        >
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.WED)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>
        <el-button type="success" class="add_icon" @click="addTime(day.WED)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
    <div v-if="day.THURS.isDay">
      <div v-if="day.THURS.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">THURS</span></p>
        <div
          v-for="(schedule, index) in day.THURS.schedule"
          :key="index"
          :index="index"
          @remove="removeTime"
        >
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.THURS)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>

        <el-button type="success" class="add_icon" @click="addTime(day.THURS)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
    <div v-if="day.FRI.isDay">
      <div v-if="day.FRI.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">FRI</span></p>
        <div
          v-for="(schedule, index) in day.FRI.schedule"
          :key="index"
          :index="index"
          @remove="removeTime"
        >
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.FRI)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>

        <el-button type="success" class="add_icon" @click="addTime(day.FRI)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
    <div v-if="day.SAT.isDay">
      <div v-if="day.SAT.schedule.length > 0" class="schedule_time_container">
        <p>Time Schedule for <span class="day">SAT</span></p>
        <div
          v-for="(schedule, index) in day.SAT.schedule"
          :key="index"
          :index="index"
          @remove="removeTime"
        >
          <schedule-time day="SUN">
            <template slot="delete">
              <el-button
                type="default"
                class="delete"
                @click="removeTime(index, day.SAT)"
                ><i class="el-icon-delete"></i
              ></el-button>
            </template>
            <template slot="add"> </template>
          </schedule-time>
        </div>

        <el-button type="success" class="add_icon" @click="addTime(day.SAT)">
          <i class="el-icon-circle-plus-outline"></i
        ></el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

interface param {
  isDay: boolean
  schedule: Array<object>
}

export default Vue.extend({
  name: 'Schedule',

  data() {
    return {
      day: {
        SUN: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
        MON: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
        TUES: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
        WED: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
        THURS: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
        FRI: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
        SAT: {
          isDay: false as boolean,
          schedule: [] as Array<object>,
        },
      },
    }
  },
  methods: {
    showSun(): void {
      this.day.SUN.isDay = !this.day.SUN.isDay

      if (this.day.SUN.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.SUN.schedule.push(schedule)
      }
    },
    showMon() {
      this.day.MON.isDay = !this.day.MON.isDay
      if (this.day.MON.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.MON.schedule.push(schedule)
      }
    },
    showTues() {
      this.day.TUES.isDay = !this.day.TUES.isDay
      if (this.day.TUES.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.TUES.schedule.push(schedule)
      }
    },
    showWed() {
      this.day.WED.isDay = !this.day.WED.isDay
      if (this.day.WED.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.WED.schedule.push(schedule)
      }
    },
    showThurs() {
      this.day.THURS.isDay = !this.day.THURS.isDay
      if (this.day.THURS.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.THURS.schedule.push(schedule)
      }
    },
    showFri() {
      this.day.FRI.isDay = !this.day.FRI.isDay
      if (this.day.FRI.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.FRI.schedule.push(schedule)
      }
    },
    showSat() {
      this.day.SAT.isDay = !this.day.SAT.isDay
      if (this.day.SAT.schedule.length === 0) {
        const schedule = {
          from: '' as string,
          until: '' as string,
        }
        this.day.SAT.schedule.push(schedule)
      }
    },
    addTime(event: param) {
      const schedule = {
        from: '' as string,
        until: '' as string,
      }
      event.schedule.push(schedule)
    },
    removeTime(event: number, isActive: param): void {
      console.log(event)
      // isActive.schedule.splice(event, 1)
      if (event === 0 && isActive.schedule.length === 0) {
        isActive.isDay = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.all_days {
  padding-top: 10px;
  .all {
    margin-bottom: 5px;
    padding: 5px;
  }
}
p {
  padding: 10px 0;
  .day {
    font-weight: 900;
    font-size: 18px;
  }
}
.schedule_time_container {
  margin-top: 10px;
  padding: 10px 5px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  .display_time {
    display: flex;
  }
  .add_icon {
    position: relative;
    padding: 5px !important;
    align-self: flex-end;
    margin-bottom: 8px;
    margin-left: 8px;
  }
  .delete {
    position: relative;
    padding: 5px !important;
    align-self: flex-end;
  }
  i {
    padding: 0 5px;
    font-size: 20px;
  }
}
</style>

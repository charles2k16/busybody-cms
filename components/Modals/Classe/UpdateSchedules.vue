<template>
  <div>
    <el-row>
      {{ updateschedules }}
      <span>Select Day</span>
      <el-row class="all_days">
        <el-button class="all" size="mini" @click.once="showDay('Sunday', 7)"
          >SUN</el-button
        >
        <el-button class="all" size="mini" @click.once="showDay('Monday', 1)"
          >MON</el-button
        >
        <el-button class="all" size="mini" @click.once="showDay('Tuesday', 2)"
          >TUES</el-button
        >
        <el-button class="all" size="mini" @click.once="showDay('Wednesday', 3)"
          >WED</el-button
        >
        <el-button class="all" size="mini" @click.once="showDay('Thurs', 4)"
          >THURS</el-button
        >
        <el-button class="all" size="mini" @click.once="showDay('Friday', 5)"
          >FRI</el-button
        >
        <el-button class="all" size="mini" @click.once="showDay('Saturday', 6)"
          >SAT</el-button
        >
      </el-row>
    </el-row>
    <div v-if="updates.length > 0">
      <div v-for="(schedule, index) in updateschedules" :key="schedule._id">
        <p>
          Time Schedule for <span class="day"> {{ schedule.day }} </span>
        </p>
        <div style="padding-bottom: 20px">
          <div>
            <el-row class="time_container">
              <el-row class="time_lapse_container">
                <el-time-select
                  v-model="schedule.start_time"
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
                  v-model="schedule.end_time"
                  placeholder="End time"
                  class="time_lapse"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: schedule.start_time,
                  }"
                >
                </el-time-select>
              </el-row>
              <div class="icons">
                <el-button
                  type="default"
                  class="delete"
                  @click="removeUpdateTime(index)"
                  ><i class="el-icon-delete"></i
                ></el-button>
              </div>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isDay">
      <div v-for="(schedule, index) in schedules" :key="index">
        <p>
          Time Schedule for <span class="day"> {{ schedule.day }} </span>
        </p>
        <div style="padding-bottom: 20px">
          <div>
            <el-row class="time_container">
              <el-row class="time_lapse_container">
                <el-time-select
                  v-model="schedule.start_time"
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
                  v-model="schedule.end_time"
                  placeholder="End time"
                  class="time_lapse"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: schedule.start_time,
                  }"
                >
                </el-time-select>
              </el-row>
              <div class="icons">
                <el-button
                  type="default"
                  class="delete"
                  @click="removeTime(index)"
                  ><i class="el-icon-delete"></i
                ></el-button>
              </div>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Schedule',
  props: {
    updateschedules: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isActive: {
        backgroundColor: 'rgba(223, 223, 223, 0.5)',
      },
      isDay: false as boolean,
      schedules: [] as Array<object>,
      isSun: false as boolean,
      updates: this.updateschedules,
    }
  },
  methods: {
    showDay(day: string, daysWeek: number): void {
      console.log(day, daysWeek)
      this.isDay = true
      const schedule = {
        days_week: daysWeek,
        day,
        start_time: '' as string,
        end_time: '' as string,
      }

      this.schedules.push(schedule)
      const scheme = this.schedules
      this.$emit('schedules', scheme)
    },
    removeUpdateTime(event: number): void {
      const scheme = this.schedules

      this.updates.splice(event, 1)
      this.$emit('schedules', scheme)
    },
    removeTime(event: number): void {
      const scheme = this.schedules

      this.schedules.splice(event, 1)
      this.$emit('schedules', scheme)
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
.delete {
  position: relative;
  padding: 5px !important;
  color: red;
  align-self: flex-end;
}
i {
  padding: 0 5px;
  font-size: 20px;
}
p {
  padding: 10px 0;
  .day {
    font-weight: 900;
    font-size: 18px;
  }
}
.time_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icons {
  margin-top: 10px;
  align-self: center;
}

@media (min-width: 1024px) {
  .time_container {
    flex-direction: row;
    margin: 0 20px;
  }

  .icons {
    margin-top: 0;
    align-self: center;
  }
}

@media (min-width: 1440px) {
  .time_container {
    flex-direction: column;
    .time_lapse_container {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .icons {
    margin-top: 10px;
    font-size: 30px;
    align-self: center;
  }
}
</style>

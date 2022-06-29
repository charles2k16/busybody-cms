<template>
  <div>
    <div>
      <el-alert
        title="To get tailored analysis, click on a card to get full data information"
        type="info"
        effect="dark"
        show-icon
      >
      </el-alert>
      <div class="d-flex justify-right mt-20">
        <el-button type="primary" plain> Add New Event </el-button>
      </div>
    </div>
    <el-row :gutter="0" class="mt-20">
      <el-col :md="7">
        <el-card class="calendar-card">
          <div class="event__incoming">
            <h3>Incoming Class Event</h3>
            <div class="mt-20">
              <div>
                <i class="el-icon-alarm-clock"></i>
                <span>12:30pm - 6:00pm</span>
              </div>
              <div class="mt-10">
                <i class="el-icon-date"></i>
                <span>20th April 2022</span>
              </div>
              <br />
              <el-button type="primary" size="small" round class="full_width"
                >View Event</el-button
              >
            </div>
          </div>
        </el-card>
        <el-card class="calendar-card mt-20">
          <h3 class="selected_date d-flex_justify_between">
            <i class="el-icon-date"></i>
            {{ getFormatedDate(selectedDate, 'long') }}
          </h3>
          <div>
            <el-calendar
              v-model="selectedDate"
              :first-day-of-week="7"
              class="schedule_calendar"
            >
              <template slot="dateCell" slot-scope="{ date, data }">
                <span @click="onDateChanged(date, data.isSelected)">
                  {{ new Date(date).getDate() }}
                </span>
              </template>
            </el-calendar>
          </div>
        </el-card>

        <div class="mt-20">
          <h3>Facilities</h3>

          <div class="mt-10 locations">
            <span class="d-block">Causewau Bay</span>
            <span class="d-block">Shek Mun</span>
            <span class="d-block">Fo Tan</span>
          </div>
        </div>
        <br />
        <hr />
        <div class="mt-20">
          <h3>Categories</h3>

          <div class="mt-10 mr-20">
            <el-select v-model="category" class="full_width">
              <el-option
                v-for="(cat, index) in categories"
                :key="index"
                :value="cat.name"
                ><span
                  class="category_circles"
                  :style="set_background(cat.color)"
                  >.</span
                >
                {{ cat.name }}</el-option
              >
            </el-select>
          </div>
        </div>
      </el-col>

      <el-col :md="17">
        <el-row :gutter="25">
          <el-col :md="10">
            <DataCountCard
              title="Total Events Booked"
              icon="el-icon-document"
              :total-number="20"
            />
          </el-col>
          <el-col :md="10">
            <DataCountCard
              title="Events for the month"
              icon="el-icon-document"
              :total-number="4"
            />
          </el-col>
          <el-col :md="4">
            <!-- <br />
            <el-button icon="el-icon-plus" type="danger"> Add Event </el-button> -->
          </el-col>
        </el-row>

        <div class="event_div mt-40">
          <div class="event_div__head d-flex_justify_between">
            <span>
              <h3>Thursday</h3>
            </span>

            <span>
              <h3>{{ getFormatedDate(selectedDate, 'long') }}</h3>
            </span>

            <span>
              <i class="el-icon-back"></i>
              <i class="el-icon-right"></i>
            </span>
          </div>

          <div class="px-10 mt-20">
            <el-card class="event_div__card">
              <el-row type="flex" class="event_div__event">
                <el-col :span="3">
                  <div class="event_time d-flex_justify_center">
                    <span>8:30 am</span>
                  </div>
                </el-col>

                <el-col :span="21">
                  <div class="event_div__info">
                    <div class="d-flex_justify_between">
                      <h3>SM Aerial Hoop - Intermediate</h3>
                      <small>1h 30min</small>
                    </div>
                    <div class="d-flex mt-10">
                      <i class="el-icon-office-building"></i>
                      <h4>BusyBody Fitness Centre 630SM</h4>
                    </div>

                    <div class="d-flex mt-10">
                      <i class="el-icon-user-solid"></i>
                      <h4>Andre Tan</h4>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row type="flex" class="event_div__event">
                <el-col :span="3">
                  <div class="event_time d-flex_justify_center">
                    <span>8:30 am</span>
                  </div>
                </el-col>

                <el-col :span="21">
                  <div class="event_div__info">
                    <div class="d-flex_justify_between">
                      <h3>SM Aerial Hoop - Intermediate</h3>
                      <small>1h 30min</small>
                    </div>
                    <div class="d-flex mt-10">
                      <i class="el-icon-office-building"></i>
                      <h4>BusyBody Fitness Centre 630SM</h4>
                    </div>

                    <div class="d-flex mt-10">
                      <i class="el-icon-user-solid"></i>
                      <h4>Andre Tan</h4>
                    </div>
                  </div>
                </el-col>
              </el-row>

              <el-row type="flex" class="event_div__event">
                <el-col :span="3">
                  <div class="event_time d-flex_justify_center">
                    <span>9:45 am</span>
                  </div>
                </el-col>

                <el-col :span="21">
                  <div class="event_div__info">
                    <div class="d-flex_justify_between">
                      <h3>SM Yoga therapy - All Levels</h3>
                      <small>2h 30min</small>
                    </div>
                    <div class="d-flex mt-10">
                      <i class="el-icon-office-building"></i>
                      <h4>BusyBody Fitness Centre 630SM</h4>
                    </div>

                    <div class="d-flex mt-10">
                      <i class="el-icon-user-solid"></i>
                      <h4>Cammie Yip</h4>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </div>
        -->
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Calendar',
  data() {
    return {
      selectedDate: '' as object | string,
      category: '' as string,
      categories: [],
    }
  },
  async fetch() {
    const response = await this.$categoriesApi.get()
    this.categories = response.data
  },
  mounted() {
    this.selectedDate = new Date()
  },
  methods: {
    getcalendar() {
      // fetch calendar with start date.
      //  if calendar has a start date greater or equal to current date(todays date)
      //  if start date is lesser than current date but end date is greater than cuurent date
      //  if schedule has no end date and start date is less
      // show the schedule days with thier class of these particular schedules.
      //
    },
    onDateChanged(date: object, selected: boolean) {
      console.log(date)
      console.log(selected)
      console.log(this.selectedDate)
    },
    set_background(color: string) {
      return {
        background: color,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.calendar-card {
  width: 365px;

  .selected_date {
    i {
      color: rgb(192, 7, 7);
      font-weight: bold;
      font-size: 29px;
    }
    font-size: 1.5rem;
  }
}
.event__incoming {
  // border: 1px solid rgb(211, 209, 209);
  // border-radius: 10px;
  max-width: 330px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 10px;

  i {
    color: rgb(192, 7, 7);
    font-weight: bold;
    font-size: 19px;
  }
}
.event_div {
  background: #eeeaf9;
  height: 100vh;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &__head {
    background: var(--color-primary);
    color: var(--text-white);
    padding: 15px 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    span {
      background-color: #703b8d;
      padding: 8px 12px;
      border-radius: 5px;
    }
  }

  &__event {
    border-bottom: 1px solid #c7bfbf;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    .event_time {
      border-right: 1px solid #c7bfbf;
      height: 137px;

      span {
        font-size: 23px;
        font-weight: bold;
      }
    }
  }

  &__info {
    background: rgb(92, 46, 186);
    background: linear-gradient(
      172deg,
      rgba(92, 46, 186, 0.929030987394958) 33%,
      rgba(70, 46, 145, 0.9318321078431373) 79%
    );
    margin: 15px;
    padding: 15px;
    border-radius: 10px;
    color: white;

    i {
      color: #d094f3;
      margin-right: 10px;
      font-weight: bold;
      font-size: 18px;
    }
  }
}

.locations {
  span {
    width: 300px;
    font-size: 1rem;
    font-weight: bold;
    color: #703b8d;
    background: #e6e0f9;
    margin-bottom: 10px;
    padding: 6px 10px;
    border-radius: 5px;

    &:hover {
      color: #fff;
      background: #703b8d;
    }
  }
}
</style>

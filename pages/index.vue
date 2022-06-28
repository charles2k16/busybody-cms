<template>
  <div>
    <el-row :gutter="12">
      <h3>
        <b>Welcome {{ $auth.user.first_name }} !</b>
      </h3>

      <p class="mt-10">
        This is your recent dashboard activities for
        <span class="text-primary">
          <b>{{ todaysDAteInText() }} </b></span
        >
      </p>

      <el-alert
        class="mt-10"
        title="To get tailored analysis, click on a card to get full data information"
        type="info"
        effect="dark"
        show-icon
      >
      </el-alert>

      <br />
      <el-col :md="6" :sm="12">
        <DataCountCard
          title="Classes Booked"
          border="#055835"
          total-number="5"
          percentage="10"
        />
      </el-col>

      <el-col :md="6" :sm="12">
        <DataCountCard
          title="Classes Booked"
          border="#e80e0e"
          total-number="14"
          percentage="20"
        />
      </el-col>
      <el-col :md="6" :sm="12">
        <DataCountCard
          title="Revenue"
          border="#cc9e08"
          total-number="$500"
          percentage="30"
        />
      </el-col>
      <el-col :md="6" :sm="12">
        <DataCountCard
          title="User/Clients"
          border="#440A66"
          total-number="35"
          percentage="50"
        />
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt-40">
      <el-col :span="12" class="second_cards">
        <div>
          <h3>New users this week</h3>
          <el-card class="mt-20">
            <el-table v-loading="tableLoading" :data="newUsers" stripe>
              <el-table-column label="Details">
                <template #default="props">
                  <div class="d-flex">
                    <el-avatar
                      size="medium"
                      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                    ></el-avatar>
                    <div class="text-primary ml-10">
                      <span>{{ props.row.name }}</span> <br />
                      <small>{{ props.row.email }}</small>
                    </div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column label="Address">
                <template #default="">
                  <span>Causewau Bay, 34 road</span> <br />
                  <span>(000) 000-0000</span>
                </template>
              </el-table-column>
              <el-table-column label="Joined">
                <template #default="props">
                  <span>{{ props.row.lastActive }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>

      <el-col :span="12" class="second_cards">
        <h3>Capacity of classes</h3>
        <BarCharts />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BarCharts from '~/components/BarCharts.vue'
import DataCountCard from '~/components/DataCountCard.vue'
import { IMixinState } from '@/types/mixinsTypes'
import { IUser } from '@/types'

export default Vue.extend({
  components: {
    BarCharts,
    DataCountCard,
  },
  data() {
    return {
      newUsers: [] as Array<object>,
      tableLoading: true as boolean,
      queryParams: {
        page: 1 as number,
        limit: 20 as number,
      },
    }
  },
  async fetch() {
    try {
      const trainers = await this.$rolesApi.index('/trainers', this.queryParams)
      this.loadDataTable(trainers.data)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    loadDataTable(trainers: Array<IUser>) {
      const self = this
      // i used bbClass to represent a single class object. because javascript uses the keyword class

      const tableData = trainers.map(function (trainer) {
        trainer.name = trainer.first_name + ' ' + trainer.last_name
        trainer.lastActive = (self as any as IMixinState).getFormatedDate(
          trainer.lastActive,
          'short'
        )
        trainer.classNumber = trainer.classes.length
        return trainer
      })
      this.newUsers = tableData
      this.tableLoading = false
    },
  },
})
</script>

<style lang="scss" scoped></style>

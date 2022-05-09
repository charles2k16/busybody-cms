<template>
  <div>
    <ModalHandler ref="handleAction" />
    <UpdateModalHandler ref="updateAction" />
    <DeleteModal
      ref="deleteAction"
      @confirmDelete="deleteTrainer"
    ></DeleteModal>

    <el-row :gutter="10" class="mb-2 mt-40">
      <el-col :sm="21" :md="21">
        <div class="d-flex">
          <el-input
            v-model="search"
            placeholder="Search Trainers"
            class="search_input_width"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-sort"></el-button>
          </el-input>
        </div>
      </el-col>

      <el-col :sm="3" :md="3">
        <el-button icon="el-icon-plus" type="primary" @click="addTrainerModal">
          Add a Trainer
        </el-button>
      </el-col>
    </el-row>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="trainersData" stripe>
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

        <el-table-column label="Num. of Classes">
          <template #default="props">
            <span class="center">{{ props.row.classNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Last Active">
          <template #default="props">
            <span>{{ props.row.lastActive }}</span>
          </template>
        </el-table-column>

        <el-table-column>
          <template slot-scope="props">
            <el-tooltip
              class="item"
              effect="dark"
              content="Edit Trainer"
              placement="top"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="updateTrainer(props.row)"
              ></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteTrainerModal(props.row._id)"
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
import { IUser } from '@/types'
import { IMixinState } from '@/types/mixinsTypes'
import UpdateModalHandler from '@/handlers/UpdateModalHandler.vue'

export default Vue.extend({
  name: 'Trainers',
  components: {
    UpdateModalHandler,
  },
  data() {
    return {
      search: '' as string,
      trainersData: [] as Array<object>,
      tableLoading: true as boolean,
      trainerId: '' as string,
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
      this.trainersData = tableData
      this.tableLoading = false
    },
    updateTrainer(trainer: object) {
      ;(this as any).$refs.updateAction.updateTrainerModal(this.$fetch, trainer)
    },
    deleteTrainerModal(trainerId: string): void {
      console.log(trainerId)
      this.trainerId = trainerId
    },
    deleteTrainer() {
      // this.$trainersApi.delete(this.trainerId).then(() => this.$fetch())
    },
    addTrainerModal(): void {
      ;(this as any).$refs.handleAction.addTrainerModal(this.$fetch)
    },
  },
})
</script>

<template>
  <div>
    <ModalHandler ref="modalAction" />
    <DeleteHandler
      ref="deleteAction"
      @confirmDelete="deleteFacility"
    ></DeleteHandler>

    <el-row :gutter="10" class="mb-2 mt-40">
      <el-col :sm="21" :md="21">
        <div class="d-flex">
          <el-input
            v-model="search"
            placeholder="Search Facilities"
            class="search_input_width"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-sort"></el-button>
          </el-input>
        </div>
      </el-col>

      <el-col :sm="3" :md="3">
        <el-button
          icon="el-icon-plus"
          type="primary"
          @click="showFacilityModal"
        >
          Add a Facility
        </el-button>
      </el-col>
    </el-row>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="facilitiesData" stripe>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="description" label="Description" width="400" />
        <el-table-column label="Bookable" align="center">
          <template #default="props">
            <el-tag
              :type="props.row.bookable === false ? 'danger' : 'primary'"
              size="small"
            >
              <b> {{ props.row.bookable === false ? 'No' : 'Yes' }}</b>
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template #default="props">
            <el-tooltip
              class="item"
              effect="dark"
              content="Edit Facility"
              placement="top"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="showUpdateModal(props.row)"
              ></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="confirmDeleteFacility(props.row._id)"
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
import { IMixinState } from '@/types/mixinsTypes'

export default Vue.extend({
  name: 'Facilities',
  data() {
    return {
      search: '' as string,
      facilitiesData: [] as Array<object>,
      tableLoading: true as boolean,
      facilityId: null as any,
    }
  },
  async fetch() {
    try {
      const facilities = await this.$facilitiesApi.get()
      this.facilitiesData = facilities.data
      this.tableLoading = false
    } catch (error) {
      ;(this as any as IMixinState).catchError(error)
    }
  },
  methods: {
    confirmDeleteFacility(id: string) {
      this.facilityId = id
      ;(this as any).$refs.deleteAction.open()
    },
    showUpdateModal(facility: object) {
      ;(this as any).$refs.modalAction.updateFacilityModal(
        this.$fetch,
        facility
      )
    },
    deleteFacility() {
      this.$facilitiesApi
        .delete(this.facilityId)
        .then(() => {
          this.$fetch()
          this.$message({
            type: 'success',
            message: 'Facility Deleted successfully!',
          })
        })
        .catch((error) => {
          ;(this as any as IMixinState).catchError(error)
        })
    },
    showFacilityModal(): void {
      ;(this as any).$refs.modalAction.addFacilityModal(this.$fetch)
    },
  },
})
</script>

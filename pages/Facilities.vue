<template>
  <div>
    <ModalHandler ref="handleAction" />
    <UpdateModalHandler ref="updateAction" />
    <DeleteModal
      ref="deleteAction"
      @confirmDelete="deleteFacility"
    ></DeleteModal>

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
              :type="props.row.bookable === false ? 'danger' : 'info'"
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
                @click="updateFacilityModal(props.row)"
              ></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteFacilityModal(props.row._id)"
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
import UpdateModalHandler from '@/handlers/UpdateModalHandler.vue'

export default Vue.extend({
  name: 'Clients',
  components: {
    UpdateModalHandler,
  },
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
      console.log(facilities)
      this.tableLoading = false
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    deleteFacilityModal(id: string) {
      this.facilityId = id
      ;(this as any).$refs.deleteAction.open()
    },
    updateFacilityModal(facility: object) {
      ;(this as any).$refs.updateAction.updateFacilityModal(
        this.$fetch,
        facility
      )
    },
    deleteFacility() {
      this.$facilitiesApi.delete(this.facilityId).then(() => this.$fetch())
    },
    showFacilityModal(): void {
      ;(this as any).$refs.handleAction.addFacilityModal(this.$fetch)
    },
  },
})
</script>

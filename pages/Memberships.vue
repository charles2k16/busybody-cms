<template>
  <div>
    <ModalHandler ref="handleAction"></ModalHandler>

    <el-row :gutter="10" class="mb-2 mt-40">
      <el-col :sm="20" :md="20">
        <div class="d-flex">
          <el-input
            v-model="search"
            placeholder="Search Memberships"
            class="search_input_width"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-sort"></el-button>
          </el-input>
        </div>
      </el-col>

      <el-col :sm="4" :md="4">
        <el-button icon="el-icon-plus" type="primary" @click="addMemberModal"
          >Add Membership
        </el-button>
      </el-col>
    </el-row>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="membershipsData" stripe>
        <el-table-column label="Name">
          <template #default="props">
            <div class="d-flex">
              <el-avatar
                size="medium"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>
              <div class="text-primary ml-10">
                <span>{{ props.row.name }}</span> <br />
                <small>{{ props.row.email }}</small> <br />
                <small>{{ props.row.phone }}</small>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Membership"> </el-table-column>
        <el-table-column label="Bookings"> </el-table-column>
        <el-table-column label="Credits"> </el-table-column>
        <!-- <el-table-column label="Last Active">
          <template #default="props">
            <span>{{ props.row.lastActive }}</span>
          </template>
        </el-table-column> -->

        <el-table-column>
          <template #default="">
            <el-button type="primary">View Profile</el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="Edit Trainer"
              placement="top"
            >
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </el-tooltip>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
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

export default Vue.extend({
  name: 'Memberships',
  data() {
    return {
      search: '' as string,
      membershipsData: [] as Array<object>,
      tableLoading: true as boolean,
      queryParams: {
        page: 1 as number,
        limit: 20 as number,
      },
    }
  },
  async fetch() {
    try {
      const clients = await this.$rolesApi.userTypes(
        'clients',
        this.queryParams
      )
      this.loadDataTable(clients.data)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    loadDataTable(clients: Array<IUser>) {
      const self = this
      // i used bbClass to represent a single class object. because javascript uses the keyword class

      const tableData = clients.map(function (client) {
        client.name = client.first_name + ' ' + client.last_name
        client.lastActive = (self as any as IMixinState).getFormatedDate(
          client.lastActive,
          'short'
        )
        client.classNumber = client.classes.length
        return client
      })
      this.membershipsData = tableData
      this.tableLoading = false
    },
    addMemberModal(): void {
      ;(this as any).$refs.handleAction.showAddMemberModal()
    },
  },
})
</script>

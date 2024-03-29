<template>
  <div>
    <ModalHandler ref="handleAction" />
    <UpdateModalHandler ref="updateAction"></UpdateModalHandler>
    <DeleteModal
      ref="deleteAction"
      @confirmDelete="deleteClientModal"
    ></DeleteModal>

    <el-row :gutter="10" class="mb-2 mt-40">
      <el-col :sm="21" :md="21">
        <div class="d-flex">
          <el-input
            v-model="search"
            placeholder="Search Clients"
            class="search_input_width"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-sort"></el-button>
          </el-input>
        </div>
      </el-col>

      <el-col :sm="3" :md="3">
        <el-button icon="el-icon-plus" type="primary" @click="AddClientModal">
          Add a Client
        </el-button>
      </el-col>
    </el-row>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="clientsData" stripe>
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
          <template slot-scope="props">
            <el-button type="primary">View Profile</el-button>
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
                @click="updateClient(props.row)"
              ></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteClient(props.row._id)"
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
  name: 'Clients',
  components: {
    UpdateModalHandler,
  },
  data() {
    return {
      search: '' as string,
      clientsData: [] as Array<object>,
      tableLoading: true as boolean,
      queryParams: {
        page: 1 as number,
        limit: 20 as number,
      },
      clientId: '' as string,
    }
  },
  async fetch() {
    try {
      const clients = await this.$rolesApi.get('/clients', this.queryParams)
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
      this.clientsData = tableData
      this.tableLoading = false
      console.log(tableData)
    },
    updateClient(client: object) {
      ;(this as any).$refs.updateAction.updateClientModal(this.$fetch, client)
    },
    deleteClientModal() {
      this.$userApi.delete(this.clientId).then(() => this.$fetch())
    },
    deleteClient(id: string) {
      this.clientId = id
      ;(this as any).$refs.deleteAction.open()
    },
    AddClientModal(): void {
      ;(this as any).$refs.handleAction.addClientModal(this.$fetch)
    },
  },
})
</script>

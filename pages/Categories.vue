<template>
  <div>
    <ModalHandler ref="modalAction" />
    <UpdateModalHandler ref="updateAction" />

    <DeleteModal
      ref="deleteAction"
      file="facility"
      @confirmDelete="deleteCategory"
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
          </el-input>
        </div>
      </el-col>

      <el-col :sm="3" :md="3">
        <el-button
          icon="el-icon-plus"
          type="primary"
          @click="showCategoryModal"
        >
          Add a Category
        </el-button>
      </el-col>
    </el-row>

    <el-card class="mt-40">
      <el-table v-loading="tableLoading" :data="categoriesData" stripe>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="color" label="Color" />
        <el-table-column align="right">
          <template #default="props">
            <el-tooltip
              class="item"
              effect="dark"
              content="Edit Category"
              placement="top"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="showUpdateCategory(props.row)"
              ></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteCategoryModal(props.row._id)"
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
      categoriesData: [] as Array<object>,
      tableLoading: false as boolean,
      categoryId: '' as string,
    }
  },
  async fetch() {
    this.tableLoading = true
    try {
      const categories = await this.$categoriesApi.get()
      this.categoriesData = categories.data
      this.tableLoading = false
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    deleteCategoryModal(id: string) {
      this.categoryId = id
      ;(this as any).$refs.deleteAction.open()
    },
    deleteCategory() {
      this.$categoriesApi.delete(this.categoryId).then(() => this.$fetch())
    },
    showCategoryModal(): void {
      ;(this as any).$refs.modalAction.addCategoryModal(this.$fetch)
    },
    showUpdateCategory(category: object): void {
      ;(this as any).$refs.modalAction.updateCategoryModal(
        this.$fetch,
        category
      )
    },
  },
})
</script>

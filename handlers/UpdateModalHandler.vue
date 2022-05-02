<template>
  <div>
    <!-- Add Class dialog -->
    <el-dialog
      :visible.sync="showUpdateCategoryModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate category filtering.
        </p>
      </template>
      <UpdateCategory @closeClassModal="closeUpdateCategoryModal" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalHandler',
  data() {
    return {
      modalTitle: '' as string,
      categoryId: '' as string,
      showUpdateCategoryModal: false as boolean,
      successFunc: null as any,
    }
  },
  methods: {
    updateCategoryModal(refereshTable: any, id: string): void {
      this.categoryId = id
      this.modalTitle = 'Update Category'
      this.successFunc = refereshTable
      this.showUpdateCategoryModal = true
    },
    closeUpdateCategoryModal() {
      this.closeModal(this.successFunc)
      this.showUpdateCategoryModal = false
    },
    closeModal(done: any) {
      done()
    },
  },
})
</script>

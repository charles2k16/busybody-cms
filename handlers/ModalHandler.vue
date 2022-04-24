<template>
  <div>
    <!-- Add Class dialog -->
    <el-dialog
      :visible.sync="showAddClassModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate class filtering.
        </p>
      </template>
      <AddClasses @closeClassModal="closeAddClassModal" />
    </el-dialog>
    <el-dialog
      :visible.sync="showAddFacilityModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate class filtering.
        </p>
      </template>
      <AddFacilityModal @closeClassModal="closeAddFacilityModal" />
    </el-dialog>
    <el-dialog
      :visible.sync="showAddCategoryModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate class filtering.
        </p>
      </template>
      <AddCategoryModal @closeClassModal="closeAddCategoryModal" />
    </el-dialog>
    <el-dialog
      :visible.sync="showAddTrainerModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate class filtering.
        </p>
      </template>
      <AddCategoryModal @closeClassModal="closeAddTrainerModal" />
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
      showAddClassModal: false as boolean,
      showAddFacilityModal: false as boolean,
      showAddCategoryModal: false as boolean,
      showAddTrainerModal: false as boolean,
      successFunc: null as any,
    }
  },
  methods: {
    addClassModal(refereshTable: any): void {
      this.modalTitle = 'Add Classes'
      this.successFunc = refereshTable
      this.showAddClassModal = true
    },
    closeAddClassModal() {
      this.closeModal(this.successFunc)
      this.showAddClassModal = false
    },
    addFacilityModal(refereshTable: any): void {
      this.modalTitle = 'Add Facility'
      this.successFunc = refereshTable
      this.showAddFacilityModal = true
    },
    closeAddFacilityModal() {
      this.closeModal(this.successFunc)
      this.showAddFacilityModal = false
    },
    addCategoryModal(refereshTable: any): void {
      this.modalTitle = 'Add Category'
      this.successFunc = refereshTable
      this.showAddCategoryModal = true
    },
    closeAddCategoryModal() {
      this.closeModal(this.successFunc)
      this.showAddCategoryModal = false
    },
    addTrainerModal(refereshTable: any): void {
      this.modalTitle = 'Add Trainer'
      this.successFunc = refereshTable
      this.showAddTrainerModal = true
    },
    closeAddTrainerModal() {
      this.closeModal(this.successFunc)
      this.showAddTrainerModal = false
    },
    closeModal(done: any) {
      done()
    },
  },
})
</script>

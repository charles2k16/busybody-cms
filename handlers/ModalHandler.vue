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
          All fields should be filled for accurate facility filtering.
        </p>
      </template>
      <AddFacility @closeAddFacilityModal="closeAddFacilityModal" />
    </el-dialog>
    <el-dialog
      :visible.sync="showAddCategoryModal"
      width="25%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
      </template>
      <AddCategory
        :category="category"
        @closeCategoryModal="closeAddCategoryModal"
      />
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
          All fields should be filled for accurate trainer filtering.
        </p>
      </template>
      <AddTrainer @closeTrainerModal="closeAddTrainerModal" />
    </el-dialog>

    <el-dialog
      :visible.sync="showAddClientModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate client filtering.
        </p>
      </template>
      <AddClient @closeClientModal="closeAddClientModal" />
    </el-dialog>
    <el-dialog
      :visible.sync="showAddMemberModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate member filtering.
        </p>
      </template>
      <AddMember @closeAddMemberModal="closeAddMemberModal" />
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
      showAddClientModal: false as boolean,
      showAddFacilityModal: false as boolean,
      showAddCategoryModal: false as boolean,
      showAddTrainerModal: false as boolean,
      showAddMemberModal: false as boolean,
      successFunc: null as any,
      category: {} as any,
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
    addClientModal(refereshTable: any): void {
      this.modalTitle = 'Add Client'
      this.successFunc = refereshTable
      this.showAddClientModal = true
    },
    closeAddClientModal() {
      this.closeModal(this.successFunc)
      this.showAddClientModal = false
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
    updateCategoryModal(refereshTable: any, category: object): void {
      this.modalTitle = 'Update Category'
      this.category = category
      this.successFunc = refereshTable
      this.showAddCategoryModal = true
    },
    closeAddCategoryModal() {
      this.closeModal(this.successFunc)
      this.showAddCategoryModal = false
      this.category = {}
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
    addMemberModal(refereshTable: any): void {
      this.modalTitle = 'Add Member'
      this.successFunc = refereshTable
      this.showAddMemberModal = true
    },
    closeAddMemberModal() {
      this.closeModal(this.successFunc)
      this.showAddMemberModal = false
    },
    closeModal(done: any) {
      done()
    },
  },
})
</script>

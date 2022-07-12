<template>
  <div>
    <!-- Add Class dialog -->
    <el-dialog
      :visible.sync="showAddClassModal"
      width="40%"
      :before-close="closeAddClassModal"
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
      width="30%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate facility filtering.
        </p>
      </template>
      <AddFacility
        v-if="showAddFacilityModal"
        :facility="updateData"
        :is-edit="isEdit"
        @closeAddFacilityModal="closeAddFacilityModal"
      />
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
        v-if="showAddCategoryModal"
        :category="updateData"
        @closeCategoryModal="closeAddCategoryModal"
      />
    </el-dialog>
    <el-dialog
      :visible.sync="showTrainersModal"
      width="35%"
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
      showTrainersModal: false as boolean,
      showAddMemberModal: false as boolean,
      successFunc: null as any,
      updateData: {} as any,
      isEdit: false as boolean,
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

    // facility modal
    addFacilityModal(refereshTable: any): void {
      this.updateData = {}
      this.isEdit = false
      this.modalTitle = 'Add Facility'
      this.successFunc = refereshTable
      this.showAddFacilityModal = true
    },
    updateFacilityModal(refereshTable: any, facility: object): void {
      this.updateData = {}
      this.isEdit = true
      this.modalTitle = 'Update Facility'
      this.successFunc = refereshTable
      this.updateData = facility
      this.showAddFacilityModal = true
    },
    closeAddFacilityModal() {
      this.closeModal(this.successFunc)
      this.updateData = {}
      this.showAddFacilityModal = false
    },

    // category modal
    addCategoryModal(refereshTable: any): void {
      this.updateData = {}
      this.modalTitle = 'Add Category'
      this.successFunc = refereshTable
      this.showAddCategoryModal = true
    },
    updateCategoryModal(refereshTable: any, category: object): void {
      this.updateData = {}
      this.modalTitle = 'Update Category'
      this.successFunc = refereshTable
      this.updateData = category
      this.showAddCategoryModal = true
    },
    closeAddCategoryModal() {
      this.closeModal(this.successFunc)
      this.updateData = {}
      this.showAddCategoryModal = false
    },

    // users modal
    addTrainersModal(refereshTable: any): void {
      this.modalTitle = 'Add Trainer'
      this.successFunc = refereshTable
      this.showTrainersModal = true
    },
    closeAddTrainerModal() {
      this.closeModal(this.successFunc)
      this.showTrainersModal = false
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

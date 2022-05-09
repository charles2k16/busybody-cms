<template>
  <div>
    <!-- Add Class dialog -->
    <el-dialog
      :visible.sync="showUpdateClassModal"
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
      <UpdateClass
        :classupdate="classUpdate"
        @closeModal="closeUpdateClassModal"
      />
    </el-dialog>

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
      <UpdateCategory
        :category="category"
        @closeCategoryModal="closeUpdateCategoryModal"
      />
    </el-dialog>

    <el-dialog
      :visible.sync="showUpdateFacilityModal"
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
      <UpdateFacility
        :facility="facilityUpdate"
        @closeModal="closeUpdateFacilityModal"
      />
    </el-dialog>
    <el-dialog
      :visible.sync="showUpdateTrainerModal"
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
      <UpdateTrainer
        :trainer="trainerUpdate"
        @closeClientModal="closeUpdateTrainerModal"
      />
    </el-dialog>
    <el-dialog
      :visible.sync="showUpdateClientModal"
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
      <UpdateClient :client="clientUpdate" />
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
      category: {},
      classUpdate: {},
      facilityUpdate: {},
      trainerUpdate: {},
      clientUpdate: {},
      showUpdateClientModal: false as boolean,
      showUpdateTrainerModal: false as boolean,
      showUpdateFacilityModal: false as boolean,
      showUpdateCategoryModal: false as boolean,
      showUpdateClassModal: false as boolean,
      successFunc: null as any,
    }
  },
  methods: {
    updateClassModal(refereshTable: any, classDetails: any) {
      const details = classDetails
      this.classUpdate = Object.assign(details)
      this.modalTitle = 'Update Class'
      this.successFunc = refereshTable
      this.showUpdateClassModal = true
    },
    closeUpdateClassModal() {
      this.closeModal(this.successFunc)
      this.showUpdateCategoryModal = false
    },
    updateCategoryModal(refereshTable: any, category: any) {
      this.category = category
      this.modalTitle = 'Update Category'
      this.successFunc = refereshTable
      this.showUpdateCategoryModal = true
    },

    closeUpdateCategoryModal() {
      this.closeModal(this.successFunc)
      this.showUpdateCategoryModal = false
    },
    updateFacilityModal(refereshTable: any, facility: any) {
      console.log(facility)
      this.facilityUpdate = facility
      this.modalTitle = 'Update Facility'
      this.successFunc = refereshTable
      this.showUpdateFacilityModal = true
    },

    closeUpdateFacilityModal() {
      this.closeModal(this.successFunc)
      this.showUpdateFacilityModal = false
    },
    updateTrainerModal(refereshTable: any, trainer: any) {
      this.trainerUpdate = trainer
      this.modalTitle = 'Update Trainer'
      this.successFunc = refereshTable
      this.showUpdateTrainerModal = true
    },

    closeUpdateTrainerModal() {
      this.closeModal(this.successFunc)
      this.showUpdateTrainerModal = false
    },
    updateClientModal(refereshTable: any, client: any) {
      console.log(client)
      this.clientUpdate = client
      this.modalTitle = 'Update Client'
      this.successFunc = refereshTable
      this.showUpdateClientModal = true
    },

    closeUpdateClientModal() {
      this.closeModal(this.successFunc)
      this.showUpdateClientModal = false
    },
    closeModal(done: any) {
      done()
    },
  },
})
</script>

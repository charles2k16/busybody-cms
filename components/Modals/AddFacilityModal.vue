<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="facilityDetails" label-position="top">
      <el-dialog
        :visible.sync="showFacilityModal"
        width="35%"
        custom-class="mobile-modal"
      >
        <template slot="title">
          <h3>{{ modalTitle }}</h3>
          <p class="mt-10">
            All fields should be filled for accurate facility filtering.
          </p>
        </template>
        <div class="facility">
          <el-form-item label="Facility name">
            <el-input v-model="details.name" placeholder="name"> </el-input>
          </el-form-item>
          <el-form-item label="Facility description">
            <el-input
              v-model="details.description"
              type="textarea"
              rows="3"
              placeholder="description"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="facility_submit">
            <el-button
              type="primary"
              :disabled="!isValid"
              @click="submitFacility"
              >Submit</el-button
            >
          </el-form-item>
        </div>
      </el-dialog>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { facilityDetail } from '@/types/modals/addModals'

export default Vue.extend({
  name: 'AddFacilityModal',
  data(): facilityDetail {
    return {
      modalTitle: '' as string,
      showFacilityModal: false as boolean,
      details: {
        name: '',
        description: '',
      },
    }
  },
  computed: {
    isValid(): boolean {
      return this.details.name !== '' && this.details.description !== ''
    },
  },
  methods: {
    showAddFacilityModal(): void {
      this.modalTitle = 'Add Facility'
      this.showFacilityModal = true
    },
    submitFacility(): void {
      this.$emit('facility', this.details)
      this.showFacilityModal = false
    },
  },
})
</script>
<style lang="scss" scoped>
.input_spacing {
  padding-top: 10px;
}
.facility {
  padding: 10px;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);

  .facility_submit {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

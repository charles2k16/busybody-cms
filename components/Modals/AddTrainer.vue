<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="trainer" label-position="top">
      <el-dialog
        :visible.sync="showTrainerModal"
        width="35%"
        custom-class="mobile-modal"
      >
        <template slot="title">
          <h3>{{ modalTitle }}</h3>
          <p class="mt-10">
            All fields should be filled for accurate trainer filtering.
          </p>
        </template>
        <div class="facility">
          <el-form-item label="First Name">
            <el-input v-model="details.firstName" placeholder="First name">
            </el-input>
          </el-form-item>
          <el-form-item label="Last Name">
            <el-input v-model="details.lastName" placeholder="Last Name">
            </el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="details.email" placeholder="body@gym.com">
            </el-input>
          </el-form-item>
          <el-form-item label="Contact">
            <el-input
              v-model="details.phone"
              type="number"
              placeholder="0022003333"
            >
            </el-input>
          </el-form-item>
          <el-row :gutter="10" class="mt-20">
            <el-col :md="24" :xs="24" :sm="24">
              <label class="mb-10 d-block">Profile picture</label>
              <ImageUpload />
            </el-col>
          </el-row>
          <el-form-item class="input_spacing facility_submit">
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
import { trainerDetails } from '@/types/modals/addModals'

export default Vue.extend({
  name: 'AddTrainer',

  data(): trainerDetails {
    return {
      modalTitle: '' as string,
      showTrainerModal: false as boolean,
      details: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        profilePic: '',
      },
    }
  },
  computed: {
    isValid(): boolean {
      return (
        this.details.firstName !== '' &&
        this.details.lastName !== '' &&
        this.details.email !== '' &&
        this.details.phone !== '' &&
        this.details.profilePic !== ''
      )
    },
  },
  methods: {
    showAddTrainerModal(): void {
      this.modalTitle = 'Add Trainer'
      this.showTrainerModal = true
    },
    submitTrainer(): void {
      this.$emit('facility', this.details)
      this.showTrainerModal = false
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

<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="trainer" v-model="trainerDetails" label-position="top">
      <div class="facility">
        <el-form-item label="First Name">
          <el-input v-model="trainerDetails.firstName" placeholder="First name">
          </el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="trainerDetails.lastName" placeholder="Last Name">
          </el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="trainerDetails.email" placeholder="body@gym.com">
          </el-input>
        </el-form-item>
        <el-form-item label="Contact">
          <el-input
            v-model="trainerDetails.phone"
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
            :loading="loading"
            :disabled="!isValid"
            @click="submitFacility"
            >Submit</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddTrainer',

  data() {
    return {
      loading: false,
      trainerDetails: {
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
        this.trainerDetails.firstName !== '' &&
        this.trainerDetails.lastName !== '' &&
        this.trainerDetails.email !== '' &&
        this.trainerDetails.phone !== '' &&
        this.trainerDetails.profilePic !== ''
      )
    },
  },
  methods: {
    submitTrainer(): void {
      //  this.$trainersApi.create(this.trainerDetails)
      //   .then((res) => {
      //     console.log(res)
      //     this.loading = false
      //     this.$message.success('Category Created Successfully!')
      //     this.$fetch()
      //   })
      //   .catch((err) => {
      //     if (err?.data) {
      //       this.$message.error('An Error Occured!')
      //     }
      //     console.log(err)
      //   })
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

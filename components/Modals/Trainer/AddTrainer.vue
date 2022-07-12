<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="trainer" v-model="trainerDetails" label-position="top">
      <div class="facility">
        <el-form-item label="First Name">
          <el-input
            v-model="trainerDetails.first_name"
            placeholder="First name"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="trainerDetails.last_name" placeholder="Last Name">
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
        <el-form-item label="Location">
          <el-input v-model="trainerDetails.location" type="text"> </el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="trainerDetails.address" type="textarea" rows="3">
          </el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            v-model="trainerDetails.password"
            type="password"
            placeholder="Password"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input
            v-model="confirm_pass"
            type="password"
            placeholder="confirm Password"
          >
          </el-input>
        </el-form-item>
      </div>
    </el-form>

    <el-button
      type="primary"
      :loading="loading"
      class="full_width"
      @click="addTrainer"
      >Add Trainer</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddTrainer',
  data() {
    return {
      loading: false,
      confirm_pass: '' as string,
      confirm_password: '' as string,
      trainerDetails: {
        first_name: '' as string,
        last_name: '' as string,
        role: '5f37924f756ade120baadce0' as string,
        password: '' as string,
        email: '' as string,
        phone: '' as string,
        location: '' as string,
        address: '' as string,
      },
    }
  },
  methods: {
    addTrainer(): void {
      this.$userApi
        .create(this.trainerDetails)
        .then((res) => {
          console.log(res)
          this.$message.success('Trainer Created Successfully!')
          this.$emit('closeTrainerModal')
          this.loading = false
        })
        .catch((err) => {
          if (err?.data) {
            this.$message.error('An error occured!')
          }
          console.log(err)
        })
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

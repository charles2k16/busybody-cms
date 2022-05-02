<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="trainer" v-model="trainerDetails" label-position="top">
      <p v-if="notMatch">* {{ notMatch }}</p>
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
        <el-form-item label="Password">
          <el-input v-model="trainerDetails.password" placeholder="Last Name">
          </el-input>
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input v-model="confirmpass" placeholder="Last Name"> </el-input>
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
        <el-form-item class="input_spacing facility_submit">
          <el-button
            type="primary"
            :loading="loading"
            :disabled="!isValid"
            @click="submitTrainer"
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
      confirmPass: '' as string,
      notMatch: false as Boolean,
      trainerDetails: {
        first_name: '' as string,
        last_name: '' as string,
        password: '' as string,
        email: '' as string,
        phone: '' as string,
      },
    }
  },
  computed: {
    isValid(): boolean {
      return (
        this.trainerDetails.first_name !== '' &&
        this.trainerDetails.last_name !== '' &&
        this.trainerDetails.password !== '' &&
        this.trainerDetails.email !== '' &&
        this.trainerDetails.phone !== ''
      )
    },
  },
  methods: {
    submitTrainer(): void {
      if (this.confirmPass !== this.trainerDetails.password) {
        this.notMatch = true
      }
      this.$userApi
        .create(this.trainerDetails)
        .then((res) => {
          console.log(res)
          this.loading = false
          this.$message.success('Trainer Created Successfully!')
          this.$fetch()
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

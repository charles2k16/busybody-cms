<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="trainer" v-model="trainerDetails" label-position="top">
      <p v-if="notMatch" style="color: red">{{ notMatch }}</p>
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
        <el-row :gutter="10" class="mt-20">
          <el-col :md="22" :xs="24" :sm="24">
            <el-form-item prop="roles">
              <el-select
                v-model="trainerDetails.role"
                filterable
                placeholder="Select a Role"
                class="full_width"
              >
                <el-option
                  v-for="(role, index) in roles"
                  :key="index"
                  :label="role.name"
                  :value="role._id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="2" :xs="24" :sm="24">
            <el-tooltip
              class="item"
              effect="dark"
              content="Add roles"
              placement="top"
            >
              <el-button type="primary" icon="el-icon-plus" circle></el-button>
            </el-tooltip>
          </el-col>
        </el-row>
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
          <el-button type="primary" :loading="loading" @click="submitTrainer"
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
      confirm_pass: '' as string,
      notMatch: '' as string,
      confirm_password: '' as string,
      roles: [],
      trainerDetails: {
        first_name: '' as string,
        last_name: '' as string,
        role: '' as string,
        password: '' as string,
        email: '' as string,
        phone: '' as string,
      },
    }
  },
  methods: {
    submitTrainer(): void {
      if (this.confirm_pass !== this.trainerDetails.password) {
        this.notMatch = 'Your password does not match'
      } else {
        this.$userApi
          .create(this.trainerDetails)
          .then((res) => {
            console.log(res)
            this.notMatch = ''
            this.$emit('closeTrainerModal')
            this.loading = false
            this.$message.success('Trainer Created Successfully!')
          })
          .catch((err) => {
            if (err?.data) {
              this.$message.error('An error occured!')
            }
            console.log(err)
          })
      }
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

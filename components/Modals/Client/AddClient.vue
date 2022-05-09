<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form
      ref="clientDetails"
      v-model="details"
      class="client"
      label-position="top"
    >
      <el-form-item label="First Name">
        <el-input v-model="details.first_name" placeholder="First name">
        </el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="details.last_name" placeholder="Last Name">
        </el-input>
      </el-form-item>

      <el-row :gutter="10" class="mt-20">
        <el-col :md="24" :xs="24" :sm="24">
          <el-form-item label="Roles">
            <el-select
              v-model="details.role"
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
      </el-row>
      <el-form-item label="Password">
        <el-input v-model="details.password" placeholder="password"> </el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="details.email" placeholder="body@gym.com">
        </el-input>
      </el-form-item>
      <!-- <el-form-item label="Contact">
        <el-input
          v-model="details.phone"
          type="number"
          placeholder="0022003333"
        >
        </el-input>
      </el-form-item> -->
      <el-form-item class="input_spacing facility_submit">
        <el-button type="primary" :disabled="!isValid" @click="submitClient"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddClient',

  data() {
    return {
      details: {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        // phone: '',
        password: '',
      },
      roles: [],
    }
  },
  async fetch() {
    const roles = await this.$rolesApi.userTypes()
    console.log(roles)
    this.roles = roles.data
  },
  computed: {
    isValid(): boolean {
      return (
        this.details.first_name !== '' &&
        this.details.last_name !== '' &&
        this.details.password !== '' &&
        this.details.email !== '' &&
        this.details.phone !== ''
      )
    },
  },
  methods: {
    submitClient(): void {
      this.$userApi
        .create(this.details)
        .then((res) => {
          console.log(res)
          this.$emit('closeClientModal')
          this.loading = false
          this.$message.success('Client Created Successfully!')
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
.client {
  padding: 10px;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);

  .facility_submit {
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>

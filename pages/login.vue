<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Login</span>
      </div>
      <div class="text item">
        <el-form ref="loginForm" :model="loginForm" label-width="120px">
          <el-form-item label="Email">
            <el-input v-model="loginForm.email"></el-input>
          </el-form-item>

          <el-form-item label="Password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>

        <div class="mt-20">
          <el-button @click="userLogin">Login</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin(): Promise<any> {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginForm,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>

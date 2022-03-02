<template>
  <div class="login_container">
    <div class="box-card">
      <el-card>
        <div slot="header" class="clearfix">
          <span class="login_title">BusyBody Fitness Center</span>
          <p class="mt-10">Login to manage Locations and Classes</p>
        </div>
        <div class="text item">
          <el-form ref="loginForm" :model="loginForm">
            <el-form-item>
              <el-input
                v-model="loginForm.email"
                class="bb_input"
                placeholder="Your email/username"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-input
                v-model="loginForm.password"
                class="bb_input"
                placeholder="Enter password"
              ></el-input>
            </el-form-item>
          </el-form>

          <div class="d-flex_justify_between mt-30">
            <el-checkbox v-model="remember">Remember Me</el-checkbox>

            <span>Forget Password</span>
          </div>

          <div class="mt-40">
            <el-button class="full_width" type="primary" @click="userLogin"
              >Login</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
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
        email: '' as string,
        password: '' as string,
      },
      remember: false as boolean,
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

<style lang="scss" scoped>
.login_container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box-card {
    max-width: 600px;
    width: 100%;

    .login_title {
      font-size: 2rem;
    }
  }
}
</style>

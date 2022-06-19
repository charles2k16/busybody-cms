<template>
  <div class="login_container">
    <div class="box-card">
      <div class="center">
        <img src="/busybody.png" alt="logo" />
      </div>

      <el-card class="py-10 px-10">
        <div slot="header" class="clearfix">
          <!-- <span class="login_title">BusyBody Fitness Center</span> -->
          <p class="mt-10">Login to manage Locations and Classes</p>
        </div>
        <div class="text item">
          <el-form ref="loginForm" :model="loginForm">
            <el-form-item>
              <el-input
                v-model="loginForm.email"
                class="bb_input"
                placeholder="Your email"
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

          <!-- <div class="d-flex_justify_between mt-30">
            <span class="clickable">Forget Password</span>
          </div> -->

          <div class="mt-40">
            <el-button
              class="full_width"
              type="primary"
              :loading="loading"
              @click="userLogin"
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
import { IMixinState } from '@/types/mixinsTypes'

export default Vue.extend({
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      loading: false,
      loginForm: {
        email: '' as string,
        password: '' as string,
      },
      remember: false as boolean,
    }
  },
  methods: {
    async userLogin(): Promise<any> {
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: this.loginForm,
        })
        this.loading = false
      } catch (error: any) {
        const err = Object.assign({}, error)
        const message = err.response.data.error
        this.loading = false
        ;(this as any as IMixinState).getNotification(message, 'error')
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
  // background-color: #440a66;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23440A66'/%3E%3Cstop offset='1' stop-color='%23C60AFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%234e0a74'/%3E%3Cstop offset='1' stop-color='%23b603f9'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23580a82'/%3E%3Cstop offset='1' stop-color='%23a106e9'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%23630a90'/%3E%3Cstop offset='1' stop-color='%238f08d9'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%236f0a9e'/%3E%3Cstop offset='1' stop-color='%237e0ac9'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%237a09ad'/%3E%3Cstop offset='1' stop-color='%236e0cba'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%238708bc'/%3E%3Cstop offset='1' stop-color='%23600dab'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%239307cb'/%3E%3Cstop offset='1' stop-color='%23530e9d'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%23a005da'/%3E%3Cstop offset='1' stop-color='%23470f8f'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%23ae04e9'/%3E%3Cstop offset='1' stop-color='%233d0f81'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%23bd02f9'/%3E%3Cstop offset='1' stop-color='%23330f73'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%23C60AFF'/%3E%3Cstop offset='1' stop-color='%232B0F66'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");
  // background-attachment: fixed;
  // background-size: cover;

  .box-card {
    max-width: 500px;
    width: 100%;

    .login_title {
      font-size: 2rem;
    }
  }
}
</style>

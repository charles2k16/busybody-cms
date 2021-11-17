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
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  auth: false,
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="sass" scoped></style>

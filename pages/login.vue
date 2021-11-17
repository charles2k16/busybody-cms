<template>
  <div>
    <h2>login</h2>
    <p>set up the login input boxes and succefully login</p>
  
  <el-card class="box-card"  style="float: center">
  <div slot="header" class="clearfix">
    <span style="float: center; padding: 3px 0">Login </span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button> -->
  </div>
   <el-form
    ref="dynamicValidateForm"
    :model="dynamicValidateForm"
    label-width="40px"
    class="demo-dynamic"
  >
  <span class="demo-input-label">Email</span>
   <el-input v-model="dynamicValidateForm.email" placeholder="Please input email"  />

  <span class="demo-input-label">Password</span>
   <el-input v-model="input" placeholder="Please input password" show-password />

 
  <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >
     </el-form-item> 
    </el-form>
 
</el-card>

</div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            key: 1,
            value: '',
          },
        ],
        password: '',
        email: '',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

  },
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
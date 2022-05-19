<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form ref="trainer" label-position="top">
      <el-form-item label="Credit Name">
        <el-input v-model="details.creditName" placeholder="Credit Name">
        </el-input>
      </el-form-item>
      <el-form-item label="Total Credits">
        <el-input
          v-model="details.totalCredits"
          type="number"
          placeholder="Total Credits"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input
          v-model="details.description"
          type="textarea"
          rows="3"
          placeholder="description"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="details.price" type="number" placeholder="0.00">
        </el-input>
        <el-form-item label="Period">
          <el-input v-model="details.period" placeholder="2 months"> </el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="input_spacing facility_submit">
        <el-button type="primary" @click="submitMembership">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddTrainer',

  data() {
    return {
      modalTitle: '' as string,
      showTrainerModal: false as boolean,
      details: {
        creditName: '',
        totalCredits: null,
        description: '',
        price: null,
        period: '',
      },
    }
  },
  methods: {
    submitMembership(): void {
      this.$emit('facility', this.details)
      this.$emit('closeClassModal')
      this.$categoriesApi
        .create(this.details)
        .then((res: any) => {
          console.log(res)

          this.$message.success('Member Created Successfully!')
          this.$fetch()
        })
        .catch((err: any) => {
          if (err?.data) {
            this.$message.error('An Error Occured!')
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

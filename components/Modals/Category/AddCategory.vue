<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form
      ref="categoryDetails"
      v-model="categoryDetails"
      class="facility"
      label-position="top"
    >
      <el-form-item label="Category name">
        <el-input v-model="categoryDetails.name" placeholder="name"> </el-input>
      </el-form-item>
      <el-form-item label="Category Slug">
        <el-input v-model="categoryDetails.slug" placeholder="slug"> </el-input>
      </el-form-item>
      <el-form-item class="facility_submit">
        <el-button
          type="primary"
          :loading="loading"
          :disabled="!isValid"
          @click="submitFacility"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddFacilityModal',
  data() {
    return {
      loading: false,
      categoryDetails: {
        name: '' as string,
        slug: '' as string,
      },
    }
  },
  computed: {
    isValid(): boolean {
      return (
        this.categoryDetails.name !== '' && this.categoryDetails.slug !== ''
      )
    },
  },
  methods: {
    submitFacility(): void {
      this.loading = true
      this.$emit('closeClassModal')
      this.$categoriesApi
        .create(this.categoryDetails)
        .then((res) => {
          console.log(res)
          this.loading = false
          this.$message.success('Category Created Successfully!')
          this.$fetch()
        })
        .catch((err) => {
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

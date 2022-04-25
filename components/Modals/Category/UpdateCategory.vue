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
        <el-input
          v-model="categoryDetails.slug"
          type="textarea"
          rows="3"
          placeholder="slug"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="facility_submit">
        <el-button
          type="primary"
          :loading="loading"
          :disabled="!isValid"
          @click="submitCategory"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UpdateCategorysModal',
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
    submitCategory(): void {
      this.loading = true
      //    this.$categoriesApi
      //         .update("", this.categoryDetails)
      //         .then((res) => {
      //           console.log(res)
      //           this.$message.success('Category Updated Successfully!')
      //           this.$fetch()
      //         })
      //         .catch((err) => {
      //           if (err?.data) {
      //             this.$message.error('An Error Occured!')
      //           }

      //           console.log(err)
      //         })
      this.$emit('closeClassModal')
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

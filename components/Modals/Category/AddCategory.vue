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
      <el-form-item label="Category Color">
        <small>Select color from picker</small>
        <el-color-picker v-model="categoryDetails.color"></el-color-picker>
        <el-input
          v-model="categoryDetails.color"
          placeholder="color code"
          readonly
        >
        </el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      :loading="loading"
      class="full_width"
      @click="addCategory"
      >Save Category</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddFacilityModal',
  props: {
    category: {
      type: Object,
      required: false,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      loading: false,
      categoryDetails: {
        name: '' as string,
        color: '#8B2121' as string,
      },
    }
  },
  created() {
    // check if there is a property passed in the props
    if (this.category.id) {
      this.categoryDetails.id = this.category.id
      this.categoryDetails.name = this.category.name
      this.categoryDetails.color = this.category.color
    }
  },
  methods: {
    addCategory(): void {
      this.loading = true

      if (this.categoryDetails.id) {
        this.$categoriesApi
          .update(this.categoryDetails.id, this.categoryDetails)
          .then(() => {
            this.loading = false
            this.$message.success('Category Updated Successfully!')
            this.$emit('closeCategoryModal')
          })
          .catch((err) => {
            if (err?.data) {
              this.$message.error('An Error Occured!')
            }

            console.log(err)
          })
      } else {
        this.$categoriesApi
          .create(this.categoryDetails)
          .then(() => {
            this.loading = false
            this.$message.success('Category Created Successfully!')
            this.$emit('closeCategoryModal')
          })
          .catch((err) => {
            if (err?.data) {
              this.$message.error('An Error Occured!')
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

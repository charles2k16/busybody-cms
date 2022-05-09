<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form
      ref="facilityDetails"
      v-model="details"
      class="facility"
      label-position="top"
    >
      <el-form-item label="Category name">
        <el-input v-model="details.name" placeholder="name"> </el-input>
      </el-form-item>
      <el-form-item label="Category description">
        <el-input
          v-model="details.description"
          type="textarea"
          rows="3"
          placeholder="description"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="facility_submit">
        <el-button type="primary" :loading="loading" @click="submitFacility"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UpdateFacility',
  props: {
    facility: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      loading: false,
      details: {
        name: this.facility.name as string,
        description: this.facility.description as string,
      },
      facility_id: this.facility._id,
    }
  },

  methods: {
    submitFacility(): void {
      this.loading = true
      this.$emit('closeFacilityModal')
      this.$facilitiesApi
        .update(this.facility_id, this.details)
        .then((res) => {
          console.log(res)
          this.loading = false
          this.$message.success('Facility Updated Successfully!')
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

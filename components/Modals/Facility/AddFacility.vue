<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-form
      ref="facilityDetails"
      v-model="facilityDetails"
      class="facility"
      label-position="top"
    >
      <el-form-item label="Facility name">
        <el-input v-model="facilityDetails.name" placeholder="name"> </el-input>
      </el-form-item>
      <el-form-item label="Facility description">
        <el-input
          v-model="facilityDetails.description"
          type="textarea"
          rows="3"
          placeholder="description"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Bookable" prop="bookable">
        <el-radio-group v-model="facilityDetails.bookable">
          <el-radio-button :label="true">Yes</el-radio-button>
          <el-radio-button :label="false">No</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button
      class="full_width"
      type="primary"
      :loading="loading"
      @click="submitFacility"
      >Submit</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IMixinState } from '../../../types/mixinsTypes'

export default Vue.extend({
  name: 'AddFacilityModal',
  props: {
    facility: {
      type: Object,
      required: false,
      default: () => {
        return {}
      },
    },
    isEdit: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      facilityDetails: {
        id: '' as string,
        name: '' as string,
        description: '' as string,
        bookable: false as boolean,
      },
    }
  },
  created() {
    if (this.isEdit) {
      this.facilityDetails.id = this.facility._id
      this.facilityDetails.name = this.facility.name
      this.facilityDetails.description = this.facility.description
      this.facilityDetails.bookable = this.facility.bookable
    } else {
      this.facilityDetails.name = ''
      this.facilityDetails.description = ''
      this.facilityDetails.bookable = false
    }
  },
  methods: {
    submitFacility(): void {
      this.loading = true

      if (this.isEdit) {
        this.$facilitiesApi
          .update(this.facilityDetails.id, this.facilityDetails)
          .then(() => {
            this.loading = false
            this.$message.success('Facility Updated Successfully!')
            this.$emit('closeAddFacilityModal')
          })
          .catch((error) => {
            ;(this as any as IMixinState).catchError(error)
          })
      } else {
        const facility = {
          name: this.facilityDetails.name,
          description: this.facilityDetails.description,
          bookable: this.facilityDetails.bookable,
        }

        this.$facilitiesApi
          .create(facility)
          .then((res) => {
            console.log(res)
            this.loading = false
            this.$message.success('Facility Created Successfully!')
            this.$emit('closeAddFacilityModal')
          })
          .catch((error) => {
            ;(this as any as IMixinState).catchError(error)
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

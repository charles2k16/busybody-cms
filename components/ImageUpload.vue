<template>
  <div>
    <input ref="photo" type="file" style="display: none" />
    <div class="image_upload_div center">
      <el-button type="text" @click="$refs.photo.click()">
        <b> <i class="el-icon-upload"></i> Upload Photo</b></el-button
      >

      <p class="upload_tip">
        Photo should be in standard format JPG, PNG and no more than 2MB
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ImageUpload',
})
</script>

<style lang="scss" scoped>
.image_upload_div {
  border: 1px dotted grey;
  border-radius: 10px;
  padding: 20px;

  .upload_tip {
    font-size: 12px;
  }
}
</style>

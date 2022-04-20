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
  <!-- <div>
    <el-upload
      class="upload-demo"
      drag
      action=""
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        Photo should be in standard format JPG, PNG and no more than 2MB
      </div>
    </el-upload>
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ImageUpload',
  data() {
    return {
      fileList: [] as Array<object>,
    }
  },
  methods: {
    handlePreview(file: any) {
      console.log(file)
    },
    handleRemove(e: any) {
      console.log(e)
    },
  },
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

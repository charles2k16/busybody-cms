<template>
  <!-- <div>
    <input
      ref="photo"
      type="file"
      style="display: none"
      accept="image/*"
      multiple="true"
      @change="contentFile"
      
    />
    <div class="image_upload_div center">
      <el-button type="text" @click="$refs.photo.click()">
        <b> <i class="el-icon-upload"></i> Upload Photo</b></el-button
      >
      <p class="upload_tip">
        Photo should be in standard format JPG, PNG and no more than 2MB
      </p>
    </div>
<<<<<<< HEAD
=======
  </div> -->
  <div>
    {{ fileList }}
    <el-upload
      class="upload-demo"
      drag
      action=""
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-change="contentFile"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <div slot="tip" class="el-upload__tip">
        Photo should be in standard format JPG, PNG and no more than 2MB
      </div>
    </el-upload>
>>>>>>> f1f0d0451bbc10f529d925abb28b900a73a43201
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ImageUpload',
  data() {
    return {
      fileList: [] as Array<object>,
      content: '' as string,
    }
  },
  methods: {
    handlePreview(file: any) {
      console.log(file)
    },
    handleRemove(e: any, fileList: any) {
      console.log(e)
      this.fileList = fileList
      // this.$emit('list', this.fileList)
    },
    contentFile(e: any, fileList: any) {
      this.fileList = fileList

      console.log(e, fileList)
      // this.$emit('list', fileList)
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

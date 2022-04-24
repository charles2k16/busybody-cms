<template>
  <!-- <el-popconfirm title="Are you sure to delete this?">
    <el-button slot="reference">Delete</el-button>
  </el-popconfirm> -->
  <div></div>
</template>
<script>
export default {
  methods: {
    open() {
      this.$confirm(`This will permanently delete this. Continue?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed',
          })
          this.$emit('confirmDelete', 'comfirm')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          })
        })
    },
  },
}
</script>

<template>
  <!-- <el-popconfirm title="Are you sure to delete this?">
    <el-button slot="reference">Delete</el-button>
  </el-popconfirm> -->
  <div></div>
</template>
<script>
export default {
  name: 'DeleteHandler',
  methods: {
    open() {
      this.$confirm(`This will permanently delete this. Continue?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$emit('confirmDelete')
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

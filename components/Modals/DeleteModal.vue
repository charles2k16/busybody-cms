<script>
export default {
  props: {
    file: {
      type: String,
      required: true,
    },
  },

  methods: {
    open() {
      this.$confirm(
        `This will permanently delete the ${this.file}. Continue?`,
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'error',
        }
      )
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

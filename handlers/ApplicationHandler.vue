<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-dialog
      :visible.sync="showClassModal"
      width="42%"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h2>{{ modalTitle }}</h2>
        <p>All fields should be filled for accurate class filtering.</p>
      </template>
      <AddClasses />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ApplicationHandler',
  data() {
    return {
      modalTitle: '',
      showClassModal: false,
    }
  },
  methods: {
    showAddClassModal() {
      this.modalTitle = 'Add Classes'
      this.showClassModal = true
    },
  },
})
</script>

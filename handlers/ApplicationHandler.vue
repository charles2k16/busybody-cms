<template>
  <div>
    <!-- add new enquiry dialog -->
    <el-dialog
      :visible.sync="showClassModal"
      width="35%"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate class filtering.
        </p>
      </template>
      <AddClasses v-if="showClassModal" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ApplicationHandler',
  data() {
    return {
      modalTitle: '' as string,
      showClassModal: false as boolean,
    }
  },
  methods: {
    showAddClassModal(): void {
      this.modalTitle = 'Add Classes'
      this.showClassModal = true
    },
  },
})
</script>

<template>
  <div>
    <h2>Clients</h2>
    <p>same as what u will do for trainers</p>
  </div>
</template>

<script>
// import classesApi from '../api/classes'

export default {
  name: 'Clients',
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    const ip = await this.$userApi.index()
    console.log(ip.data)
  },
}
</script>

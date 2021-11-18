import createApi from '~/api/apiService'

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const apiService = createApi(ctx.$axios)
  inject('classApi', apiService('/classes'))

  // You can reuse the repositoryWithAxios object:
  inject('userApi', apiService('/users'))
}

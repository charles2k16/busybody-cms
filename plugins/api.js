import createApi from '~/api/apiService'

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = createApi(ctx.$axios)
  inject('classApi', repositoryWithAxios('/classes'))

  // You can reuse the repositoryWithAxios object:
  inject('userApi', repositoryWithAxios('/users'))
}

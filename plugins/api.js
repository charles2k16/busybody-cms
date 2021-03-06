import createApi from '~/api/apiService'

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)

  const apiService = createApi(ctx.$axios)

  // You can reuse the repositoryWithAxios object:

  inject('userApi', apiService('/users'))
  inject('classApi', apiService('/classes'))
  inject('categoriesApi', apiService('/categories'))
  inject('facilitiesApi', apiService('/facilities'))
  inject('rolesApi', apiService('/user-types'))
  inject('membershipsApi', apiService('/memberships'))
}

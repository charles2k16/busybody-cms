import Vue, { ComponentOptions } from 'vue'

declare module 'vue/types/options' {
  interface ComponentOptions<
    V extends Vue,
    Data = DefaultData<V>,
    Methods = DefaultMethods<V>,
    Computed = DefaultComputed,
    PropsDef = PropsDefinition<DefaultProps>,
    Props = DefaultProps
    > {
    head?: object | Function
    layout?: string | Function
    middleware?: string | string[] | object
    scrollToTop?: boolean
    transition?: String | object | Function
    watchQuery?: boolean | string[]
  }
}

interface apiService {
  get: Function
  create: ( params: object ) => Promise<any>
  delete: ( params: string ) => Promise<any>
  update: ( id: string, payload: any ) => Promise<any>
  userTypes: ( path: string, params: object ) => Promise<any>
  //  (query: object): Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $classApi: apiService
    $categoriesApi: apiService
    $facilitiesApi: apiService
    $rolesApi: apiService
    $userApi: apiService
    $membershipsApi: apiService
    // $refs: { [key: string]: Vue | Element | (Vue | Element)[] | Function | undefined; }
  }
}

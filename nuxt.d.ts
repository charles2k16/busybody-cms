import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue,Data=DefaultData<V>,Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
      head?: object | Function,
      layout?: string | Function,
      middleware?: string | string[] | object,
      scrollToTop?: boolean,
      transition?: String | object | Function,
      watchQuery?: boolean | string[],
    }
}

interface apis {
  index: Function
  //  (query: object): Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $classApi: apis,
    $categoriesApi: apis
    $facilitiesApi: apis
    $rolesApi: apis
    // $refs: { [key: string]: Vue | Element | (Vue | Element)[] | Function | undefined; }
  }
}
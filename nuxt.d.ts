import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
    head?: object | Function,
    layout?: string | Function,
    middleware?: string | string[],
    scrollToTop?: boolean,
    transition?: String | object | Function,
    watchQuery?: boolean | string[]
  }
}
// declare interface fullName {
//   (firstName : string, lastName: string): string
// }

export interface MixinState {
  getFullName: (firstName : string, lastName: string) => string
}

  // (firstName : string, lastName: string): string

// declare module 'vue/types/vue' {
//   interface Vue {
//     getFullName: Function
//   }
// }


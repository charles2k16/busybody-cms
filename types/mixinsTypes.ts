export interface IMixinState {
  getFullName: (firstName : string, lastName: string) => string,
  getDate: (currentDate: string) => string,
  getNotification: (message: string, type: string) => void
  $message: Function
}


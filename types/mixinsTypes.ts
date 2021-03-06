export interface IMixinState {
  catchError ( error: any ): void;
  todaysDAteInText (): string;
  getFullName: ( firstName: string, lastName: string ) => string,
  getFormatedDate: ( currentDate: string, type: string ) => string,
  getNotification: ( message: string, type: string ) => void
  $message: Function
  $notify: Function
}


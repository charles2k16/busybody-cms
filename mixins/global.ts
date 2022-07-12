import Vue from "vue";
import { IMixinState } from '@/types/mixinsTypes'
const ModalHandler = () => import( '../handlers/ModalHandler.vue' )
const DeleteHandler = () => import( '../handlers/DeleteHandler.vue' )

export default Vue.extend( {
  components: {
    ModalHandler,
    DeleteHandler
  },
  methods: <IMixinState> {
    catchError ( error: any ) {
      const err = Object.assign( {}, error )
      const message = err.response.data.message

      this.getNotification( message, 'error' )
    },
    todaysDAteInText () {
      return new Date().toDateString();
    },
    getFullName ( firstName: string, lastName: string ): string {
      return `${ firstName } ${ lastName }`;
    },
    getFormatedDate ( currentDate: string, type: string ): string {
      if ( !currentDate ) return 'None';

      const date = new Date( currentDate );
      const dateTimeFormat = new Intl.DateTimeFormat( 'en', {
        year: 'numeric',
        month: type === 'long' ? 'long' : 'short',
        day: '2-digit',
      } );
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
      ] = dateTimeFormat.formatToParts( date );

      return `${ day }-${ month }-${ year }`;
    },
    getNotification ( message: string, type: string ) {
      this.$notify( {
        title:
          type === 'success'
            ? 'Success'
            : type === 'error'
              ? 'Error'
              : type === 'warning'
                ? 'Warning'
                : 'Info',
        message,
        type,
      } )
    },
  }
} );

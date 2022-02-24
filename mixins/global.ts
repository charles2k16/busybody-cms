import Vue from "vue";
import { IMixinState } from '@/types/mixinsTypes'

export default Vue.extend({
  methods: <IMixinState> {
    getFullName (firstName : string, lastName: string): string  {
      return `${firstName} ${lastName}`;
    },
    getDate(currentDate: string): string {
      if (!currentDate) return 'None';

      const date = new Date(currentDate);
      const dateTimeFormat = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
      ] = dateTimeFormat.formatToParts(date);

      return `${day}-${month}-${year}`;
    },
  }
});

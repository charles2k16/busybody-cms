import Vue from "vue";
import { MixinState } from '@/types/mixinsTypes'

export default Vue.extend({
  methods: <MixinState> {
    getFullName (firstName : string, lastName: string): string  {
      return `${firstName} ${lastName}`;
    }
  }
});


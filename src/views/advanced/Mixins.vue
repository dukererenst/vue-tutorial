<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
        <b-col>
          Mixins are a flexible way to distribute reusable functionalities for
          Vue components. A mixin object can contain any component options. When
          a component uses a mixin, all options in the mixin will be “mixed”
          into the component’s own options.
        </b-col>
      </b-row>
      <b-row>
        <b-col style="color: green; font-size: 22px; padding-top: 2%;">
          {{ team }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import { mainMixin } from '../../mixins/main';

export default {
  mixins: [ mainMixin ],
  data() {
    return {
      // teamName: 'TheEngineers',
      // teamDefinition: 'The best team in the world'
    };
  },
  // created() {
  //   console.log('oups hello from the page')
  // },

  // methods: {
  //   hello() {
  //     console.log('no more hello');
  //   }
  // }
};
</script>

<style>
</style>
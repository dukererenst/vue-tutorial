export const  mainMixin = {
  data() {
    return {
      teamName: 'spaceX',
      teamDefinition: 'The best team in the world'
    }
  },

  computed: {
    team() {
      const vm = this;
      return `${vm.teamName}-${vm.teamDefinition}`;
    }
  },

  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}
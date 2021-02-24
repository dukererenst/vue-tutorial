<template>
  <b-container class="bv-example-row" style="padding-top: 2%;">
    <b-row>
      <b-col>
        <div>
          <b-card
            v-if="showSomething"
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; alig"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          <div v-else>don't show (if)</div>
        </div>
      </b-col>
      <b-col>
          <p style="padding-top: 100px;"><b-button href="#" variant="secondary" @click="showSomething = !showSomething;">showSomething</b-button></p>
      </b-col>
      <b-col>
        <div>
          <b-card
            v-show="showSomething"
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; alig"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      showSomething: true,
    };
  },
};
</script>

<style>
</style>
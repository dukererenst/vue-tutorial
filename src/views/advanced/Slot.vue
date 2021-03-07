<template>
  <div>
    <slot-example ></slot-example>
    <slot-example>
      <template v-slot:header>
        Now i choose my header!
      </template>
      <template v-slot:main>
        Now i choose my main!
      </template>
      <template v-slot:footer>
        Now i choose my footer!
      </template>
    </slot-example>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
};
</script>

<style>
</style>
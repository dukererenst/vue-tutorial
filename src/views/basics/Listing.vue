<template>
  <div style="padding: 4%">
    <b-form>
      <ul id="example-1">
        <li v-for="(item, key) in items" :key="key">
          {{ key }} - {{ item.message }}
        </li>
      </ul>
    </b-form>
    <div>
      let me show which todo's we have: 
      <ul id="example-1">
        <li v-for="(todo, key) in todosFiltered" :key="key">
          {{ todo.title }} - {{ todo.completed }}
        </li>
      </ul>
    </div >
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      items: [
        { message: "Bir mumdur" }, 
        { message: "İki mumdur" },
        { message: "Üç mumdur" },
        { message: "Dört mumdur" }
    ],
    };
  },
  computed: {
    ...mapGetters([
      'todosFiltered'
    ])
  }
};
</script>

<style>
</style>
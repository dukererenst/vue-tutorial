<template>
  <div style="padding: 4%">
    <b-form>
      <ul id="example-1">
        <li v-for="(item, key) in items" :key="key">
          {{ key }} - {{ item.message }}
        </li>
      </ul>
    </b-form>
  </div>
</template>

<script>
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
};
</script>

<style>
</style>
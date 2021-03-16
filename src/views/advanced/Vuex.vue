<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
        <b-col>
            <todo-list />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import TodoList from '../../components/TodoList';

export default {
  components: {
    TodoList
  },
  data() {
      return {

      }
  }
}
</script>

<style>

</style>
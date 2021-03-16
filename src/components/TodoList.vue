<template>
  <div>
    <div style="padding-bottom: 25px;">
      <b-form-input
        v-model="newTodo"
        placeholder="Any Todo"
        required
        @keyup.enter="addTodo"
      ></b-form-input>
    </div>

    <todo-item
      style="padding: 5px"
      v-for="todo in todosFiltered"
      :key="todo.id"
      :todo="todo"
      :checkAll="!anyRemaining"
    >
    </todo-item>

    <div style="padding-top: 62px">
      <div>
        <label
          ><input
            type="checkbox"
            :checked="!anyRemaining"
            @change="allChecked"
          />
          Check All</label
        >
      </div>
      <div>{{ remaining }} items left</div>
    </div>
    <!-- end extra-container -->
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      name: "",
    };
  },
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
    todosFiltered() {
      return this.$store.getters.todosFiltered;
    },
    remaining() {
      return this.$store.getters.remaining;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }

      this.$store.dispatch("addTodo", {
        id: this.idForTodo,
        title: this.newTodo,
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    allChecked() {
      this.$store.dispatch("checkAll", event.target.checked);
    },
  },
};
</script>

<style>
</style>
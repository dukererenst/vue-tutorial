<template>
  <div>
    <div >
      <b-form-checkbox
        v-model="completed"
        @change="doneEdit"
      >
        <div>
          {{ title }}
          <b-icon icon="trash" style="margin-left:15px;" @click="removeTodo(todo.id)"></b-icon>
        </div>
      </b-form-checkbox>
      <span> </span>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: "",
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    },
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    doneEdit() {
      this.$store.dispatch('updateTodo', {
        id: this.id,
        title: this.title,
        completed: this.completed,
        editing: this.editing,
      })
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
  },
};
</script>

<style>
</style>
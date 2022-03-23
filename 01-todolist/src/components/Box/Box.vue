<template>
  <div class="box">
    <header class="box__header">
      <h2 class="box__header__title">To-Do-List 📝</h2>
      <div class="box__header__tags">
        <Tag title="Tasks" :count="todos.length" />
        <Tag title="Done" :count="todos.filter(item => item.checked).length" />
      </div>
    </header>
    <main class="box__content">
      <h3 v-if="todos.length === 0" class="box__content__empty">
        No tasks to do! 😁
      </h3>
      <span v-else v-for="todo in todos" :key="todo.id">
        <ListItem
          :task="todo.task"
          :checked="todo.checked"
          @checked="taskChecked(todo)"
          @delete="taskDelete(todo.id)"
        />
      </span>
    </main>
    <section class="box__input">
      <form class="box__input__form" @submit="taskSubmit">
        <input required placeholder="Add task..." v-model="task" type="text" />
        <span>{{ task.length }}/26</span>
        <button type="submit">+</button>
      </form>
    </section>
  </div>
</template>

<script>
import Tag from "../Tag";
import ListItem from "../ListItem";
export default {
  name: "Box",
  components: { Tag, ListItem },
  data() {
    return {
      todos: [],
      task: "",
    };
  },
  methods: {
    taskSubmit(e) {
      e.preventDefault();
      const data = {
        task: this.task,
        id: new Date().toLocaleString("en-us"),
        checked: false,
      };
      if (this.task.trim() && this.task.length > 0 && this.task.length <= 26) {
        this.todos = [...this.todos, data];
        this.task = "";
      }
    },
    taskChecked(todo) {
      todo.checked = !todo.checked;
    },
    taskDelete(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
 
};
</script>
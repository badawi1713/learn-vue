<template>
  <div class="list">
    <p :class="{ checked: checked }" class="list__content">{{ task }}</p>
    <div class="list__actions">
      <button
        :title="checked ? 'unchecked' : 'checked'"
        @click="checkedItem"
        class="list__actions__button checked"
      >
        {{ checked ? "❌" : "✔️" }}
      </button>
      <button
        title="delete"
        @click="deleteItem"
        class="list__actions__button delete"
      >
        🗑️
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    task: String,
    checked: Boolean,
  },
  methods: {
    deleteItem() {
      this.$emit("delete");
    },
    checkedItem() {
      this.$emit("checked");
    },
  },
};
</script>
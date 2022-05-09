<template>
  <div>
    <h1>Post ID: {{ id }}</h1>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Post",
  props: ["id", "content"],
  setup(props) {
    const { content } = props;
    const snippet = computed(() => {
      return content?.substring(0, 20) + " ...";
    });

    
    return {
      snippet,
    };
  },
};
</script>
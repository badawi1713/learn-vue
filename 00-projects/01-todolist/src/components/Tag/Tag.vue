<template>
  <div class="tag">
    <p class="tag__title">{{title}}</p>
    <p class="tag__number">{{count > 99 ? '99+' : count}}</p>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    title: String,
    count: Number
  }
};
</script>
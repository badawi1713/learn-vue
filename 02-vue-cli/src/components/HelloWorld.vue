<template>
  <h2>{{message}}</h2>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    message: String
  },
};
</script>
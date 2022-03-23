<template>
  <main class="main">
    <Container />
  </main>
</template>

<script>
import { Container } from "./components";
export default {
  name: "App",
  components: {
    Container,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>


<template>
  <Modal />
  <h1>Hello World</h1>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App! Hello World :)",
    };
  },
  methods: {
    clickHandler() {
      // console.log(this.$refs.name.value)
      // alert(this.$refs.name.value)
      this.$refs.name.focus();
      // this.$refs.name.classList.add('active')
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.active {
  border: 2px solid #020202;
}
</style>

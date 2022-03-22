<template>
  <div>
    <div v-show="showModal">
      <Modal :title="title" content="Are you sure?" :theme="theme" @close="showModalHandler" />
    </div>
    <h1>Hello World! :)</h1>
    <button @click="showModalHandler">Show Modal</button>
  </div>
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
      title: "Payment Confirmation!",
      theme: "sale",
      showModal: false,
    };
  },
  methods: {
    showModalHandler() {
      this.showModal = !this.showModal;
    },
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

<template>
  <div class="backdrop" @click="closeModalHandler">
    <div :class="{sale: theme === 'sale'}" class="modal">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
      title: String,
      content: String,
      theme: String
  },
  methods: {
      closeModalHandler(){
          this.$emit('close')
      }
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal h1 {
  color: #feb522;
  text-align: center;
  margin-bottom: 40px;
}

.modal.sale {
    background: #839d9e;
}

.modal.sale h1,p {
    color: #fff;
}
</style>
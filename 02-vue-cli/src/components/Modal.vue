<template>
  <div class="backdrop" @click.self="closeModalHandler">
    <div :class="{ sale: theme === 'sale' }" class="modal">
      <slot name="content"></slot>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    theme: String,
  },
  methods: {
    closeModalHandler() {
      this.$emit("close");
    },
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

.modal.sale >>> h1 {
  color: #fff;
}

.modal.sale >>> p {
  color: #fff;
}

.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
}
</style>
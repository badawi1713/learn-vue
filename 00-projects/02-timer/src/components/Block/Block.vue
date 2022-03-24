<template>
  <div v-if="showBlock" @click="stopTimer" class="block">CLICK ME</div>
</template>

<script>
import "./block.css";
export default {
  name: "Block",
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTIme: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTIme += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer)
      this.$emit('showResult', this.reactionTIme)
    },
  },
  mounted() {
    console.log(this.delay);
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
 
};
</script>
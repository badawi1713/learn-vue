<template>
  <main class="container">
    <header class="container__header">
      <h1>Reaction Timer ⏱️</h1>
      <p class="container__information">Click Start to Test Your Reflect</p>
    </header>
    <Result :score="score" v-if="showScore" />
    <button :disabled="isPlaying" @click="startReactTimer" class="start-button">
      {{showScore ? "RESET" : "START"}}
    </button>
    <Block :delay="delay" @showResult="showResult" v-if="isPlaying" />
  </main>
</template>

<script>
import "./styles/global.css";
import { Block, Result } from "./components";
export default {
  components: {
    Block,
    Result,
  },
  data() {
    return {
      delay: 0,
      isPlaying: false,
      score: 0,
      showScore: false,
    };
  },
  methods: {
    startReactTimer() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showScore = false;
    },
    showResult(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.delay = 0;
      this.showScore = true;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
}

.container__header {
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
}

.container__information {
  color: var(--black);
  margin-top: 10px;
  font-style: italic;
}

.start-button {
  background: var(--primary-color);
  width: 80px;
  height: 30px;
  border: none;
  padding: 4px 8px;
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;
  transition: filter 0.5s;
  margin-bottom: 40px;
}

.start-button:hover {
  filter: brightness(95%);
}

.start-button:disabled {
  background-color: #d3d3d3;
  color: #838383;
  cursor: not-allowed;
}
</style>
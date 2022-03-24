<template>
  <div class="result">
    <p class="result__text">
      Your score is <span>{{ score }}  ms</span>
    </p>
    <p class="result__info">
        {{getScoreCategory()}}
    </p>
  </div>
</template>

<script>
import "./result.css";
export default {
  name: "Result",
  props: {
    score: Number,
  },
  methods: {
      getScoreCategory(){
          if(this.score < 250){
              return "Supafast!⚡"
          } else if(this.score >= 250 && this.score <= 1000){
              return "OKAY! 👍"
          } else {
              return "Welp! 👻"
          }
      }
  }
};
</script>
<template>
  <h1>Welcome</h1>
  <h3>{{ date }}</h3>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      date: new Date().toLocaleString("en-us"),
    };
  },
  mounted(){
    setInterval(() => {
      this.date = new Date().toLocaleString("en-us")
    }, 1000)
  }
};
</script>

<template>
  <h1>Jobs Detail</h1>
  <div v-if="state?.loading">
    <h3>Load jobs detail ... #{{ id }}</h3>
  </div>
  <div v-else>
    <h3>
      {{ state?.data?.title }}
    </h3>
    <p>
      {{ state?.data?.details }}
    </p>
  </div>
</template>

<script>
export default {
  name: "JobsDetail",
  props: ["id"],
  data() {
    return {
      state: {
        loading: true,
        data: { title: "", details: "" },
        error: false,
      },
    };
  },
  methods: {
    async getJobsDetail() {
      this.state = await { ...this.state, error: false, loading: true };
      try {
        let response = await fetch(`http://localhost:3000/jobs/${this.id}`);
        let data = await response.json();
        this.state = { ...this.state, data, error: false, loading: false };
        console.log(data)
      } catch (error) {
        console.log(error);
        this.state = { ...this.state, error: true, loading: false };
      }
    },
  },
  mounted() {
    this.getJobsDetail();
  },
};
</script>
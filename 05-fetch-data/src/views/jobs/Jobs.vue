<template>
  <h1>Jobs List</h1>
  <section v-for="job in state.data" :key="job.id">
    <router-link :to="{ name: 'JobsDetail', params: {id: job.id} }">
      <h3>
        {{ job.title }}
      </h3>
      <p>
        {{ job.details }}
      </p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      state: {
        loading: true,
        data: [],
        error: false,
      },
    };
  },
  methods: {
    async getJobsData() {
      this.state = await { ...this.state, error: false, loading: true };
      try {
        let response = await fetch(`http://localhost:3000/jobs`);
        let data = await response.json();
        this.state = { ...this.state, data, error: false, loading: false };
      } catch (error) {
        console.log(error);
        this.state = { ...this.state, error: true, loading: false };
      }
    },
  },
  mounted() {
    this.getJobsData();
  },
};
</script>
<template>
  <div>
    <h1>Ref Composition</h1>
    <p>
      Hello, I am Ninja One and my name is {{ ninjaOne.name || "[name]" }}, I am
      {{ ninjaOne.age || 0 }} years old
    </p>
    <button @click="updateNinjaOneNameHandler">Update Name</button>
    <button @click="updateNinjaOneAgeHandler">Update Age</button>
    <h3>{{ timestamp }}</h3>
    <br />
    <p>My job is: {{ job.trim() || "(type your job below)" }}</p>
    <input placeholder="type jobs..." name="job" v-model="job" />
  </div>
  <br />
  <hr />
  <div>
    <h1>Reactive Composition</h1>
    <p>
      Hello, I am Ninja Two and my name is {{ ninjaTwo.name || "[name]" }}, I am
      {{ ninjaTwo.age || 0 }} years old
    </p>
    <button @click="updateNinjaTwoNameHandler">Update Name</button>
    <button @click="updateNinjaTwoAgeHandler">Update Age</button>
  </div>
  <br />
  <hr />
  <div>
    <h1>Ref Vs Reactive</h1>
    <h4>Hello my name is {{ firstName + " " + lastName }}</h4>
    <button @click="updateFirstNameHandler">Update First Name</button>
    <button @click="updateLastNameHandler">Update Last Name</button>
  </div>
  <br />
  <hr />
  <div>
    <h1>Computed Values</h1>
    <p>
      It's her, <strong>{{ name }}</strong>
    </p>
    <p>
      Her favorite fruits:
      <span v-if="matchingFruits.length < 1">
        {{ `${search} (is not her favorite tho!)` }}
      </span>
      <span v-for="fruit in matchingFruits" :key="fruit">{{ fruit }}</span>
    </p>
    <input
      type="text"
      placeholder="Input fruit emoji here..."
      v-model="search"
    />
    <p>Search one fruit - {{ search || "..." }}</p>
  </div>
  <br />
  <hr />
  <div>
    <h1>Watch & WatchEffect Hooks</h1>
    <button @click="stopSearchWatchHandler">Stop Watch</button>
  </div>
  <br />
  <hr />
  <div>
    <h1>Props</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref, reactive, computed, watch, watchEffect, onMounted, onUnmounted, onUpdated } from "vue";

export default {
  components: { PostList },
  setup() {
    // data with ref
    const ninjaOne = ref({
      name: "",
      age: 0,
    });
    const ninjaTwo = reactive({
      name: "",
      age: 0,
    });
    const timestamp = ref(new Date().toLocaleString("en-US"));
    const job = ref("");
    const firstName = ref("Dzaky");
    const lastName = reactive("Badawi"); //primitve value like string cannot be reactive
    const updateNinjaOneNameHandler = () => {
      ninjaOne.value.name = "Dzaky";
    };
    const updateNinjaOneAgeHandler = () => {
      ninjaOne.value.age = ninjaOne.value.age + 1;
    };
    const updateNinjaTwoNameHandler = () => {
      // with reactive, we can access the object property's value directly
      ninjaTwo.name = "Badawi";
    };
    const updateNinjaTwoAgeHandler = () => {
      ninjaTwo.age = ninjaTwo.age + 1;
    };
    const updateFirstNameHandler = () => {
      firstName.value = "John";
    };
    // this data is using reactive, and will not update the value because it is primitive value
    const updateLastNameHandler = () => {
      lastName = "Doe";
    };
    // how to use computed value
    const name = computed(() => {
      return "Kamisato Ayaka ❄️";
    });
    const search = ref("");
    const fruits = ref(["🍇", "🍈", "🍉", "🍋", "🍎"]);
    const matchingFruits = computed(() => {
      return fruits.value.filter((item) => item.includes(search.value));
    });
    // watch search value
    // to stop watch hook
    const stopSearchWatch = watch(search, () => {
      // everytime search value changes, do this line
      console.log("watch search input changes!");
    });
    // watchEffect: only passing function/callback
    // it can watching the value that change if only the value was passing to this hook
    // this is best practice when to retrieve a data
    const stopWatchEffect = watchEffect(() => {
      console.log("this only run initially once automatically!");
    });
    const stopSearchWatchHandler = () => {
      stopSearchWatch();
      stopWatchEffect();
    };
    // using props
    const posts = ref([
      {
        id: 1,
        title: "How to cook salmon!",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur soluta enim fugiat cupiditate magni, quo exercitationem iste provident, placeat voluptas, natus eveniet nulla! Alias nostrum nobis hic cumque laboriosam?",
      },
      {
        id: 2,
        title: "Where am I?",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur soluta enim fugiat cupiditate magni, quo exercitationem iste provident, placeat voluptas, natus eveniet nulla! Alias nostrum nobis hic cumque laboriosam?",
      },
    ]);
    // must return that need to access on the template
    // lifecycle hooks
    onMounted(() => {
      console.log("component mounted");
      const updateTimestamp = () => {
        setInterval(() => {
          // access data variable from setup
          timestamp.value = new Date().toLocaleString("en-us");
        }, 1000);
      };
      updateTimestamp();
    });
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
    return {
      firstName,
      lastName,
      ninjaOne,
      updateNinjaOneNameHandler,
      updateNinjaOneAgeHandler,
      updateNinjaTwoNameHandler,
      updateNinjaTwoAgeHandler,
      updateFirstNameHandler,
      updateLastNameHandler,
      timestamp,
      job,
      ninjaTwo,
      name,
      fruits,
      search,
      matchingFruits,
      stopSearchWatchHandler,
      posts,
    };
  },
  components: { PostList },
};
</script>
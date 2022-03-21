// creating vue app

const app = Vue.createApp({
  // template, setup data, functions
  data() {
    return {
      title: "Life is Subarashii",
      author: "Dzaky Badawi",
      age: 25,
      showBooks: true,
      showMovies: true,
      x: 0,
      y: 0,
      url: "https://dbadawi.id",
      movies: [
        {
          title: "Doraemon",
          duration: "90 minutes",
          url: "images/doraemon.jpg",
        },
        {
          title: "Pokemon",
          duration: "110 minutes",
          url: "images/pokemon.jpg",
        },
        {
          title: "Jujutsu Kaisen",
          duration: "90 minutes",
          url: "images/jjk.jpg",
        },
      ],
    };
  },
  // create methods
  methods: {
    changeTitle(title) {
      // access data from the component we can use, this
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleShowMovies() {
      this.showMovies = !this.showMovies;
    },
    handleEvent(event, number = 0) {
      console.log(event.type);
      console.log("event", number);
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});

// Method mount
app.mount("#app");

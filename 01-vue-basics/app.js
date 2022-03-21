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
      moviesTitle: "",
      url: "https://dbadawi.id",
      movies: [
        {
          id: 1,
          title: "Doraemon",
          duration: "90 minutes",
          url: "images/doraemon.jpg",
          isFavorite: false,
        },
        {
          id: 2,
          title: "Pokemon",
          duration: "110 minutes",
          url: "images/pokemon.jpg",
          isFavorite: true,
        },
        {
          id: 3,
          title: "Jujutsu Kaisen",
          duration: "90 minutes",
          url: "images/jjk.jpg",
          isFavorite: false,
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
    searchMovie(title) {
      this.moviesTitle = title;
      console.log(title);
    },
    addToFavorite(movie) {
      //   this.movies[index].isFavorite = !this.movies[index].isFavorite
      //   const updateFavorite = this.movies.map((item) => {
      //     if (item.id === id) {
      //       return { ...item, isFavorite: !item.isFavorite };
      //     }
      //     return item;
      //   });
      //   this.movies = updateFavorite;
      movie.isFavorite = !movie.isFavorite;
    },
  },
  //   Computed properties
  computed: {
      filteredMovies() {
      return (this.movies = this.movies.filter(
        (item) => item.isFavorite
      ));
    },
  },
});

// Method mount
app.mount("#app");

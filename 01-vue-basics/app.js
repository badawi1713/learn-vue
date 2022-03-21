// creating vue app

const app = Vue.createApp({
    // template, setup data, functions
    data() {
        return {
            title: 'Life is Subarashii',
            author: 'Dzaky Badawi',
            age: 25,
            showBooks: true,
            x: 0,
            y: 0,
        }
    },
    // create methods
    methods: {
        changeTitle(title){
            // access data from the component we can use, this
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, number) {
            console.log(event.type)
            console.log('event', number)
        },
        handleMouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;

        }
    }
})

// Method mount
app.mount('#app')
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todos: [
        {
          nameTask: "Task 1",
          done: true,
        },
        {
          nameTask: "Task 2",
          done: true,
        },
        {
          nameTask: "Task 3",
          done: false,
        },
        {
          nameTask: "Task 4",
          done: true,
        },
        {
          nameTask: "Task 5",
          done: false,
        },
        {
          nameTask: "Task 6",
          done: false,
        },
        {
          nameTask: "Task 7",
          done: true,
        },
      ],
    };
  },

  methods: {
    printHello() {
      console.log("Hello!");
    },
  },

  mounted() {
    this.printHello();
  },
});

app.mount("#app");

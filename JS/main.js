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

      todo: {
        nameTask: "",
        done: false,
      },
    };
  },

  methods: {
    newTask() {
      this.todos.push({ ...this.todo });
    },

    cancelTask(cancelIndex) {
      this.todos = this.todos.filter((todo, index) => {
        if (index != cancelIndex) {
          return true;
        } else {
          return false;
        }
      });
    },
  },

  mounted() {},
});

app.mount("#app");

<template>
  <div class="card">
    <div class="image">🤔</div>
    <h1 class="title">{{ title }}</h1>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
import "cqfill";
export default {
  name: "Card",
  props: {
    title: String,
    message: String,
  },
  methods: {},
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: gray;
  box-shadow: 4px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;

  position: relative;
  background-color: #ffc83d;
}
.image {
  display: block;
  width: 100%;
  font-size: 80px;
}
.title {
  background-color: black;
  color: #ffc83d;
}
.message {
  font-weight: bold;
}
.card > *{
  user-select: none;
  pointer-events: none;
  cursor: default;
}

@container (min-width: 0px) {
  .card {
    padding: 5px;
  }
  .image {
    display: none;
  }
  .title {
    font-size: 20px;
    background-color: transparent;
    color: black;
  }
  .message {
    font-size: 16px;
    font-weight: normal;
  }
}

@container (min-width: 300px) {
  .card {
    color: green;
    padding: 20px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: green;
  }
  .image {
    display: block;
    width: 50%;
    height: 50%;
    font-size: 70px;
  }
  .title {
    font-size: 20px;
    color: yellow;
  }
  .message {
    font-size: 14px;
    color: white;
    float: right;
  }
}

</style>

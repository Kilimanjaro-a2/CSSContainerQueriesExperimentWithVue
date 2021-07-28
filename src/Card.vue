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

  box-shadow: 4px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
.card > *{
  user-select: none;
  pointer-events: none;
  cursor: default;
}

@container (min-width: 0px) {
  .card {
    background-color: white;
  }
  .image {
    display: none;
  }
  .title {
    font-size: 18px;
  }
  .message {
    font-size: 14px;
  }
}

@container (min-width: 300px) {
  .card {
    color: red;
    padding: 20px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: green;
  }
  .image {
    display: block;
    width: 50%;
    font-size: 70px;
  }
  .title {
    font-size: 20px;
  }
  .message {
    font-size: 14px;
    color: white;
  }
}

@container (min-width: 600px) {
  .card {
    color: red;
    background-color: yellow;
  }
  .title {
    font-size: 60px;
  }
  .message {
    font-size: 26px;
  }
  .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 80px;
    z-index: -1;
    opacity: 1;
    background-color: #ffc83d;
    overflow: hidden;
    border-radius: inherit;
  }
}
</style>

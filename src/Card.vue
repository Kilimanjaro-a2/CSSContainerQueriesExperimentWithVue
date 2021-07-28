<template>
  <div class="card">
    <div class="image">🤔</div>
    <div class="float-right">
      <h1 class="title">{{ title }}</h1>
      <p class="message">{{ message }}</p>
    </div>
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

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.image {
  display: block;
  width: 100%;
  font-size: 80px;
}
.float-right {
  width: 100%;
}
.title {
  width: 100%;
  background-color: black;
  color: #ffc83d;
}
.message {
  font-weight: bold;
}
.card * {
  user-select: none;
  pointer-events: none;
  cursor: default;
}

@container (min-width: 0px) {
  .card {
    padding: 5px;
    background-color: white;
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
    padding: 12px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: black;
  }
  .image {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 50%;
    font-size: 60px;
  }
  .title {
    font-size: 20px;
    color: lightgray;
  }
  .message {
    font-size: 14px;
    color: lightgray;
  }
}

</style>

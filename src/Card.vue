<template>
  <div class="card">
    <div class="image disable-select">🤔</div>
    <div>
      <h1 class="title disable-select">{{ title }}</h1>
      <p class="message disable-select">{{ message }}</p>
    </div>
    <div class="overlay" />
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
  position: relative;

  box-shadow: 4px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
.disable-select {
  user-select: none;
  pointer-events: none;
  cursor: default;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  cursor: grab;
}
@container (min-width: 0px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6px;
  }
  .image {
    display: none;
  }
  .title {
    font-size: 1.5em;
  }
  .message {
    font-size: 1em;
  }
}

@container (min-width: 300px) {
  .card {
    color: black;
    padding: 20px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .image {
    display: block;
    width: 50%;
    font-size: 70px;
  }
  .title {
    font-size: 20px;
    background-color: white;
  }
  .message {
    font-size: 14px;
    background-color: white;
  }
}
@container (min-width: 600px) {
  .card {
    padding: 20px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    z-index: 5;
  }
  .title {
    color: yellow;
    background-color: black;
    font-size: 40px;
  }
  .message {
    color: black;
    background-color: white;
    font-size: 26px;
  }
  .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 160px;
    z-index: -1;
    opacity: 1;
    background-color: #ffc83d;
    overflow: hidden;
    border-radius: inherit;
  }
}
</style>

<template>
  <div class="app">
    <div class="start-container">
      <CardSlot
        class="card-slot"
        :card="zoneName == 'default' ? card : null"
        @drop="onDrop('default')"
        @start-drag="startDrag"
      />
    </div>

    <div class="containers">
      <div class="top-row container">
        <template v-for="item in ['top']" :key="item">
          <CardSlot
            class="card-slot"
            :card="getCard(item)"
            @drop="onDrop(item)"
            @start-drag="startDrag"
          />
        </template>
      </div>
      <div class="middle-row container">
        <template v-for="item in ['middle1', 'middle2']" :key="item">
          <CardSlot
            class="card-slot"
            :card="zoneName == item ? card : null"
            @drop="onDrop(item)"
            @start-drag="startDrag"
          />
        </template>
      </div>
      <div class="bottom-row container">
        <template v-for="item in ['bottom1', 'bottom2', 'bottom3']" :key="item">
          <CardSlot
            class="card-slot"
            :card="zoneName == item ? card : null"
            @drop="onDrop(item)"
            @start-drag="startDrag"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import "cqfill";
import CardSlot from "./CardSlot.vue";
export default {
  name: "App",
  data() {
    return {
      zoneName: "default",
      card: {
        title: "Draggable Card",
        message: "Try to drag and drop this card to the dotted area.",
      },
      isDragging: false,
    };
  },
  components: {
    CardSlot: CardSlot,
  },
  computed: {},
  methods: {
    getCard(zoneName) {
      return zoneName === this.zoneName ? this.card : null;
    },
    startDrag() {
      this.isDragging = true;
    },
    onDrop(zoneName) {
      if (!this.isDragging) {
        return;
      }
      this.zoneName = zoneName;
      this.isDragging = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.containers {
  --containers-height: 600px;
  --height-margin: 20px;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 600px;
  padding: 6px;
}


.container {
  display: flex;
  width: 100%;
}
.start-container {
  display: flex;
  width: 180px;
  height: 180px;
}

.top-row {
  height: 300px;
}
.middle-row {
  height: 200px;
}
.bottom-row {
  height: 200px;
}
.card-slot {
  width: 100%;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: middle;

  border: 5px dotted gray;
  border-radius: 1px;
}
</style>

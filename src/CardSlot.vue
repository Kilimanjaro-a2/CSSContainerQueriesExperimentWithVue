<template>
  <div class="card-slot" @dragover.prevent @dragenter.prevent>
    <Card
      v-if="card != null"
      :title="card.title"
      :message="card.message"
      draggable="true"
      @dragstart="startDrag"
    />
  </div>
</template>

<script>
import "cqfill";
import Card from "./Card.vue";
export default {
  name: "CardSlot",
  components: {
    Card: Card,
  },
  props: {
    card: Object,
  },
  methods: {
    startDrag() {
      if (this.card != null) {
        this.$emit("start-drag");
      }
    },
  },
};
</script>

<style scoped>
.card-slot {
  contain: layout inline-size;
}
</style>

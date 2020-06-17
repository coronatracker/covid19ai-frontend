<template>
  <div class="flex items-center cursor-pointer" @click="goHome">
    <div class="text-2xl font-bold text-black">covid19ai</div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {};
  },
  methods: {
    goHome: function() {
      if (this.$route.name !== "index") {
        this.$router.push(this.localePath("index"));
      }
    }
  }
};
</script>

<style scoped></style>

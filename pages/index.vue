<template>
  <div class="container">
    <h1 class="text-4xl">Hello World</h1>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>

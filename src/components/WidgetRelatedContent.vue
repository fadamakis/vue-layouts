<template>
  <div class="py-4">
    <section class="text-gray-800">
      <h3 class="text-l font-bold mb-2">Related Content</h3>
      <ul class="content">
        <li class="preview"></li>
        <li class="preview"></li>
        <li class="preview"></li>
        <li class="preview"></li>
        <li class="preview"></li>
        <li class="preview"></li>
        <li class="preview"></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.preview {
  flex: 33%;
  height: 100px;
  background: #c5c5c5;
}
</style>

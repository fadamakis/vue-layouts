<script setup>
defineProps(["article", "index"]);
</script>

<template>
  <div
    class="md:flex md:max-w-2xl max-w-md bg-white rounded-sm shadow-md overflow-hidden flex-col mb-8"
  >
    <div>
      <img class="h-48 w-full object-cover" :src="article.thumbnail" alt="" />
    </div>

    <div class="p-8">
      <RouterLink
        :to="`/article/${index}`"
        class="mt-1 text-lg tracking-tight font-medium text-black hover:underline"
      >
        {{ article.title }}
      </RouterLink>
      <div class="uppercase text-xs text-violet-500 font-medium">
        <span v-for="category in article.categories">[{{ category }}] </span>
      </div>
    </div>
  </div>
</template>

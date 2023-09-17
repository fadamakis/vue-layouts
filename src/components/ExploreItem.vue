<script setup>
defineProps(["article"]);
</script>
<template>
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
    style="background-position: 50%"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
  >
    <img :src="article.cover_image" class="w-full" />
    <a target="_blank" :href="article.canonical_url">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.4)"
      >
        <div class="flex justify-start items-end h-full">
          <div class="text-white m-6">
            <h5 class="font-bold text-lg mb-3">{{ article.title }}</h5>
            <p>
              <small
                >Published <u>{{ article.readable_publish_date }}</u> by
                {{ article.user.name }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

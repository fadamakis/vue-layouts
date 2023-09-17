<script setup>
import ThreeColumnLayout from "../layouts/ThreeColumnLayout.vue";
import ArticleCard from "../components/ArticleCard.vue";
import WidgetFriendSuggestions from "../components/WidgetFriendSuggestions.vue";

import useArticles from "../composables/useArticles";
const articles = useArticles().getArticles();
</script>

<template>
  <ThreeColumnLayout>
    <h2 class="text-3xl font-bold mb-4">Homepage content</h2>

    <ArticleCard v-for="(article, index) in articles" :article="article" :index="index" />

    <template #aside>
      <WidgetFriendSuggestions />
    </template>
  </ThreeColumnLayout>
</template>

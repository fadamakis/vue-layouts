<script setup>
import ThreeColumnLayout from "../layouts/ThreeColumnLayout.vue";
import WidgetRelatedContent from "../components/WidgetRelatedContent.vue";
import WidgetFriendSuggestions from "../components/WidgetFriendSuggestions.vue";
import AppNotification from "../components/AppNotification.vue";
import { useRoute } from "vue-router";
import useArticles from "../composables/useArticles";
const article = useArticles().getArticle(useRoute().params.id);
</script>

<template>
  <ThreeColumnLayout>
    <h2 class="text-3xl font-bold mb-4">{{ article.title }}</h2>

    <AppNotification>
      <p class="font-bold">Weird formatted content coming up. (Thanks Medium API!)</p>
      <p class="text-sm">
        You can find the original article
        <a target="_blank" :href="article.link">here</a>
      </p>
    </AppNotification>

    <div class="max-w-md" v-html="article.description"></div>

    <template #aside>
      <WidgetFriendSuggestions />
      <WidgetRelatedContent />
    </template>
  </ThreeColumnLayout>
</template>

<style>
h3,
h4 {
  font-weight: bold;
  font-size: 140%;
  margin-top: 10px;
}
</style>

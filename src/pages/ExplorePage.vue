<script setup>
import TwoColumnLayout from "../layouts/TwoColumnLayout.vue";
import ExploreItem from "../components/ExploreItem.vue";

import useArticles from "../composables/useArticles";
const articles = useArticles().getExploreArticles();
</script>

<template>
  <TwoColumnLayout>
    <h2 class="text-3xl font-bold mb-12">
      Latest content on <a target="_blank" href="https://dev.to/">Dev.to</a>
    </h2>

    <div class="grid lg:grid-cols-3 gap-6">
      <ExploreItem v-for="article in articles" :article="article" />
    </div>
  </TwoColumnLayout>
</template>

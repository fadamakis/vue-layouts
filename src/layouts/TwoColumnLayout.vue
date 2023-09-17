<script setup>
import AppNavigation from "../components/AppNavigation.vue";
import AppLogo from "../components/AppLogo.vue";
import AppFooter from "../components/AppFooter.vue";
</script>
<template>
  <div class="two-column-layout">
    <header>
      <AppLogo />
      <AppNavigation />
    </header>
    <main>
      <slot />
      <AppFooter />
    </main>
  </div>
</template>

<style scoped>
.two-column-layout {
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
header {
  flex-basis: 20%;
  margin-top: 30px;
}

main {
  flex-basis: 80%;
  margin-top: 10px;
  padding: 20px;
}
</style>

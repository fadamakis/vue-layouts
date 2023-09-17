<script setup>
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <div class="flex flex-col justify-between m-4">
    <nav>
      <ul>
        <li>
          <router-link
            class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
            to="/"
          >
            <AppIcon icon="house" size="lg" />
            <span class="mx-4 font-medium">Homepage</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
            to="/article/0"
          >
            <AppIcon icon="book" size="lg" />
            <span class="mx-4 font-medium">Article</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
            to="/explore"
          >
            <AppIcon icon="columns" size="lg" />
            <span class="mx-4 font-medium">Explore</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
            to="/404"
          >
            <AppIcon icon="window-x" size="lg" />
            <span class="mx-4 font-medium">404</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
            to="/login"
          >
            <AppIcon icon="key" size="lg" />
            <span class="mx-4 font-medium">Login</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.router-link-active {
  background: #e6eaf0;
}
</style>

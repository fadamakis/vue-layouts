<template>
  <div
    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-4"
    role="alert"
  >
    <div class="flex">
      <div class="p-2">
        <AppIcon icon="info-circle" size="lg" fill="#0a7266" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

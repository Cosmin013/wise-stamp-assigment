<template>
  <div :class="[
      'h-[200px]',
      'hover:bg-gray-200',
      'm-6',
      'border-4',
      'border-blue-200',
      selected ? 'border-blue-500' : '',
      'px-6', 'rounded',
      'overflow-auto'
      ]">
    <h1 class="text-3xl mb-2">{{ template.title }}</h1>
    <div v-html="template.body"></div>
  </div>
</template>

<script setup>
defineProps({
  selected: Boolean,
  template: {
    title: String,
    body: String
  }
})
</script>
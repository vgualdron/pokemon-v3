<template>
  <div class="ability">
    <h3 class="name">{{ data.name }}</h3>
    <p class="value">{{ data.value }}</p>
  </div>
</template>
<script setup>
  defineProps({
    data: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="o-profile-line-sub">
    <i class="fas fa-circle"></i>
    <div>
      {{line}}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{ line: string }>()

</script>

<style scoped>

</style>

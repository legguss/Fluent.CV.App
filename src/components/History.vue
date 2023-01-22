<template>
  <div class='o-project-history'>
    <div class='o-project-history-title'>
      Detailed Work History
    </div>
    <template v-for='historySection in history'>
      <HistorySection :history='historySection'>

      </HistorySection>
    </template>
  </div>

</template>

<script setup lang='ts'>

import HistorySection from './HistorySection.vue'

defineProps<{ history?: History[] }>()

</script>

<style scoped>

</style>

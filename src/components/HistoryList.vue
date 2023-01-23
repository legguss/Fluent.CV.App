<template>
  <div class='o-project-history'>
    <div class='o-project-history-title'>
      Detailed Work History
    </div>
    <template v-for='history in histories'>
      <HistorySection :history='history'>

      </HistorySection>
    </template>
  </div>

</template>

<script setup lang='ts'>

import {HistoryItem} from '../models/Resume'
import HistorySection from './HistorySection.vue'

defineProps<{ histories: HistoryItem[] }>()

</script>

<style scoped>

</style>

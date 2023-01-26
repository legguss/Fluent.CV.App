<template>
  <div class='o-history'>
    <div class='o-header'>
      <div class='o-period' v-if='history.Period'>{{ history.Period }}</div>
      <div class='o-company' v-if='history.Company'>{{ history.Company }}</div>
      <div class='o-role' v-if='history.Role'>&nbsp;· {{ history.Role }}</div>
    </div>
    <div class='o-sentence'>
      <template v-for='section in history.Sections'>
        <span class='o-token-wrapper' v-for='(token, index) in section '>
            <span class='o-bullet' v-if='!index'>●</span>
            <span>&nbsp;</span>
            <span class='o-token' :class='token.Type'>{{ token.Text }}</span>
          </span>
      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {HistoryItem} from '../models/Resume'

defineProps<{ history: HistoryItem }>()

</script>

<style scoped>

</style>

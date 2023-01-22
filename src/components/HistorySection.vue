<template>
  <div class='o-history'>
    <div class='o-header'>
      <div class='o-period'>{{ history.Period }}</div>
      <div class='o-company'>{{ history.Company }}</div>
    </div>
    <div class='o-story'>
      <template v-for='section in history.Sections'>
        <span class='o-token-wrapper' v-for='(token, index) in section '>
         
            <span class='o-bullet' v-if='index===0'>●</span>
            <span>&nbsp;</span>
            <span class='o-token' :class='token.Type'>{{ token.Text }}</span>
          </span>

      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {History} from '../models/Resume'

defineProps<{ history: History }>()

</script>

<style scoped>

</style>

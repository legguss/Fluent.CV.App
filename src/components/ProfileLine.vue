<template>
  <div class='o-profile-line'>
    <div class='o-profile-summary'>
      <i class='fas fa-circle' v-if='!item.JustSummary'></i>
      <div>{{ item.Summary }}</div>
    </div>
    <template v-for='line in item.Details' v-if='!item.JustSummary'>
      <ProfileLineSub :line='line'></ProfileLineSub>
    </template>
  </div>
</template>

<script setup lang='ts'>
import {StatusRole} from '../models/Resume'
import ProfileLineSub from './ProfileLineSub.vue'

defineProps<{ item: StatusRole }>()

</script>

<style scoped>

</style>

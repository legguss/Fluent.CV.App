<template>

  <div class='o-profile' v-if='story'>
    <div class='o-profile-title' v-if='story?.Title'>
      {{ story?.Title }}
    </div>

    <div class='o-profile-info'>
      <div class='o-story-item' v-for='item in story?.Items'>
        <span class='o-bullet'>●</span>
        {{ item }}
      </div>
    </div>
  </div>

</template>

<script setup lang='ts'>

import {Story} from '../models/Resume'

defineProps<{ story?: Story }>()

</script>

<style scoped>

</style>

<template>

  <div class="o-profile" v-if="story">
    <div class="o-profile-title" v-if="story?.Title">
      {{story?.Title}}
    </div>
    <div class="o-profile-status">
      <div class="o-profile-info">

        <div class="o-story-line" v-for="item in story?.Items">
          <i class="fas fa-circle" v-if="story?.MultiStory"></i>
          <div class="story-paragraph">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {Story} from '../models/Resume'

defineProps<{ story?: Story }>()

</script>

<style scoped>

</style>

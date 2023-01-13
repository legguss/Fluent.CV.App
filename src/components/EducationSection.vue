<template>
  <div class="o-education">
    <div class="o-education-title">
      education
    </div>

    <div class="o-education-info" v-for="education in educations">
      <div class="o-education-when">
        <strong>{{ education?.When }}</strong>
      </div>
      <div class="o-education-degree">
        <strong>{{ education?.Degree }}</strong>
      </div>
      <div class="o-education-school">
        {{ education?.School }}
      </div>
      <div class="o-education-department">
        {{ education?.Department }}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Education} from '../models/Resume'

defineProps<{ educations?: Education[] }>()

</script>

<style scoped>

</style>

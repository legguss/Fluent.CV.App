<template>
  <div class="o-education">
    <div class="o-education-title">
      education
    </div>
    <div class="o-education-info">
      <div>
        <strong>{{ education?.When }}</strong>
      </div>
      <div>
        <strong>{{ education?.Degree }}</strong>
      </div>
      <div>
        {{ education?.School }}
      </div>
      <div>
        {{ education?.Department }}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Education} from '../models/cv'

defineProps<{ education?: Education }>()

</script>

<style scoped>

</style>

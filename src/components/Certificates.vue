<template>
  <div class="o-education" v-if="certificates">
    <div class="o-education-title">
      other certficates
    </div>

    <div class="o-education-info" v-for="education in certificates">
      <div v-if="education.Degree" class="o-certificate-degree">
        
        <strong>{{ education?.When }} - {{ education?.Degree }} </strong>
      </div>
      <div v-if="education.School">
        {{ education?.School }}
      </div>
      <div v-if="education.Department">
        {{ education?.Department }}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Education} from '../models/Resume'

defineProps<{ certificates?: Education[] }>()

</script>

<style scoped>

</style>

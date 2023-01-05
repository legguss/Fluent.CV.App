<template>
  <div class="o-experience">
    <div class="o-experiences-title">
      WORK EXPERIENCE
    </div>
    <div class="o-experience-body">
      <div v-for="experience in experiences" class="o-experience-line">
        <div class="o-experience-header">
          <div class="o-experience-begin"> {{ experience.Period }}</div>
          <div>{{ experience.Company }}</div>
        </div>
        <div class="o-experience-roles">
          <div class="o-experience-role" v-for="detail in experience.Details">
            <i class="fas fa-circle"></i> {{detail}}
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">

import {Experience} from '../models/resume'

defineProps<{ experiences?: Experience[] }>()

</script>

<style scoped>

</style>

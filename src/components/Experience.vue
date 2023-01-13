<template>
  <div class="o-experience" v-if="experiences">
    <div class="o-experiences-title">
      {{experiences?.Title}}
    </div>
    <div class="o-experience-body">
      <div v-for="experience in experiences?.Items" class="o-experience-line">
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

import {Experiences} from '../models/Resume'

defineProps<{ experiences?: Experiences }>()

</script>

<style scoped>

</style>

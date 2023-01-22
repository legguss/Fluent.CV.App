<template>
  <div class='o-experience' v-if='experiences'>
    <div class='o-experiences-title'>
      {{ experiences?.Title }}
    </div>
    <div class='o-experience-body'>
      <div v-for='experience in experiences?.Items' class='o-experience-line'>
        <div class='o-experience-header'>
          <div class='o-experience-period'>{{ experience.Period }}</div>
          <div class='o-experience-company'>@ {{ experience.Company }}</div>
        </div>
        <div class='o-experience-role'>
          <template v-for='detail in experience.Details'>
            <span class='o-wrapper'>
                <span class='o-bullet'>●</span>
                <span class='o-detail'>{{ detail }}</span>  
            </span>
          </template>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang='ts'>

import {Experiences} from '../models/Resume'

defineProps<{ experiences?: Experiences }>()

</script>

<style scoped>

</style>

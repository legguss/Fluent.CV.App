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
          <div class='o-experience-role'>&nbsp;· {{ experience.Role }}</div>
        </div>
        <div class='o-sentence'>
          <template v-for='detail in experience.TokenizedDetails'>
            <span class='o-token-wrapper' v-for='(token, index) in detail'>
                <span class='o-bullet' v-if='index===0'>●</span>
                <span>&nbsp;</span>
                <span class='o-detail'>{{ token.Text }}</span>  
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

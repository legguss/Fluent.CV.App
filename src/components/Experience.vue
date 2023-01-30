<template>
  <div class='o-experience' v-if='experiences'>
    <div class='o-profile-title'>
      {{ experiences?.Title }}
    </div>
    <div class='o-profile-info'>
      <div class='o-sentence' v-if='experiences.TokenizedSummary' v-for='sentence in experiences?.TokenizedSummary'>
        <span class='o-token-wrapper' v-for='(token,index) in sentence'>
          <span class='o-bullet' v-if='index===0'>●</span>
          <span>&nbsp;</span>
          <span class='o-token'>{{ token.Text }}</span>  
        </span>
      </div>
    </div>
    <div class='o-experience-body'>
      <div v-for='experience in experiences?.Items' class='o-experience-line'>
        <div class='o-experience-header'>
          <div class='o-experience-period'>{{ experience.Period }}</div>
          <div class='o-experience-company' v-if='experience.Company'>@ {{ experience.Company }}</div>
          <div class='o-experience-role' v-if='experience.Role'>&nbsp;· {{ experience.Role }}</div>
        </div>
        <div class='o-sentence' v-if='experiences.Packed'>
          <template v-for='detail in experience.TokenizedDetails'>
            <span class='o-token-wrapper' v-for='(token, index) in detail'>
                <span class='o-bullet' v-if='index===0'>●</span>
                <span>&nbsp;</span>
                <span class='o-token' :class='token.Type'>{{ token.Text }}</span>
            </span>
          </template>
        </div>
        <template v-for='detail in experience.TokenizedDetails' v-if='!experiences.Packed'>
          <div class='o-sentence'>
            <span class='o-token-wrapper' v-for='(token, index) in detail'>
                <span class='o-bullet' v-if='index===0'>●</span>
                <span>&nbsp;</span>
                <span class='o-token' :class='token.Type'>{{ token.Text }}</span>
            </span>
          </div>
        </template>

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

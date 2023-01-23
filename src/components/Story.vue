<template>

  <div class='o-profile' v-if='story'>
    <div class='o-profile-title' v-if='story?.Title'>
      {{ story?.Title }}
    </div>
    <div class='o-profile-info'>
      <div class='o-sentence' v-for='item in story?.TokenizedItems'>
        <span class='o-token-wrapper' v-for='(token,index) in item'>
          <span class='o-bullet' v-if='index===0'>●</span>
          <span>&nbsp;</span>
          <span class='o-token'>{{ token.Text }}</span>  
        </span>
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

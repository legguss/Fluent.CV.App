<template>
  <div class="o-profile">
    <div class="o-profile-title">
      experience highlights
    </div>
    <div class="o-profile-status" v-for="status in statuses">
      <div class="o-profile-status-title">
        {{ status.Title }}
      </div>
      <div class="o-profile-info" v-for="item in status.Items">
        <ProfileLine :item="item">
        </ProfileLine>

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Status} from '../models/Resume'
import ProfileLine from './ProfileLine.vue'

defineProps<{ statuses?: Status[] }>()

</script>

<style scoped>

</style>

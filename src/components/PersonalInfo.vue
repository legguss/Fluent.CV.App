<template>
  <div class="o-personal-info">
    <div class="o-personal-info-table">
      <div class="o-personal-info-row" v-if="personal?.Phone">
        <div class="o-personal-info-cell o-caption">
          Telephone:
        </div>
        <div class="o-personal-info-cell o-info">
          {{ personal?.Phone }}
        </div>
      </div>
      <div class="o-personal-info-row" v-if="personal?.Email">
        <div class="o-personal-info-cell o-caption">
          Email:
        </div>
        <div class="o-personal-info-cell o-info">
          {{ personal?.Email }}
        </div>
      </div>
      <div class="o-personal-info-row" v-if="personal?.Skype">
        <div class="o-personal-info-cell o-caption">
          Skype:
        </div>
        <div class="o-personal-info-cell o-info">
          {{ personal?.Skype }}
        </div>
      </div>

      <div class="o-personal-info-row" v-if="personal?.WebSite">
        <div class="o-personal-info-cell o-caption">
          Website:
        </div>
        <div class="o-personal-info-cell o-info">
          {{ personal?.WebSite }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {Personal} from '../models/Resume'

const props = defineProps<{ personal: Personal }>()

</script>

<style scoped>

</style>

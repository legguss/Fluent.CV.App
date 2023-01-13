<template>
  <div class="o-skills" v-if="roles">
    <div class="o-skills-header">{{header}}</div>
    <div class="o-skills-body">
      <div class="o-skill" :class="{'o-top-0':skill.Top===0,'o-top-1':skill.Top===1,'o-top-3':skill.Top===3}" v-for="skill in roles">
        <div class="o-skill-label">
          {{ skill.Name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Label} from '../models/Resume'

defineProps<{ roles?: Label[], header: string }>()

</script>

<style scoped>

</style>

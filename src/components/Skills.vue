<template>
  <div class="o-skills">
    <div class="o-skills-header">{{header}}</div>
    <div class="o-skills-body">
      <div class="o-skill" v-for="skill in roles">
        <span class="o-skill-label o-skill-name" :class="{'o-top-0':skill.Top===0,'o-top-1':skill.Top===1,'o-top-3':skill.Top===3}">
          {{ skill.Name }}
        </span>
        <span v-if="false" class="o-skill-label o-skill-count">{{ skill.Count }}</span>
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

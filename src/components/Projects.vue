<template>
  <div class="o-project-history">
    <div class="o-project-history-title">
      FAVORITE PROJECTS
    </div>
    <template v-for="project in projects">
      <ProjectSection :project="project" v-if="project.Name">
      </ProjectSection>
    </template>
  </div>

</template>

<script setup lang="ts">

import {Project} from '../models/Resume'
import ProjectSection from './ProjectSection.vue'

defineProps<{ projects?: Project[] }>()

</script>

<style scoped>

</style>

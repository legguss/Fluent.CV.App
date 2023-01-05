<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import EducationSection from './EducationSection.vue'
import Experience from './Experience.vue'
import PersonalInfo from './PersonalInfo.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
import Stories from './Stories.vue'
import Status from './Status.vue'
import {Resume} from '../models/resume'

const cv = ref<Resume>({})

onBeforeMount(async () =>
{
  const response = await fetch('api/attila')
  cv.value = await response.json()
})

</script>

<template>
  <div class="o-resume">

    <div class="o-resume-page o-resume-content" v-if="cv.Personal">
      <div class="o-resume-content-main">
        <div class="o-resume-left">
          <div class="o-resume-image">
            <!--img src="../Content/self.jpg" alt="PICS"/-->
          </div>
          <div class="o-resume-name">
            {{ cv.Personal?.FullName }}
          </div>
          <div class="o-current-title">
            {{ cv.Personal?.Title }}
          </div>

          <PersonalInfo :personal="cv.Personal">
          </PersonalInfo>

          <Skills :roles="cv.Roles" header="ROLES">
          </Skills>

          <Skills :roles="cv.Skills" header="knowledge">
          </Skills>

          <Skills :roles="cv.Tools" header="tools">
          </Skills>

          <EducationSection :education="cv.Education">
          </EducationSection>

        </div>
        <div class="o-resume-right">
          <Stories :stories="cv.Story"></Stories>
          <Status :statuses="cv.Statuses"></Status>
          <Experience :experiences="cv.Experiences"></Experience>
        </div>
      </div>
    </div>
    <div class="o-resume-page o-resume-content" v-if="cv.Projects">
      <Projects :projects="cv.Projects"></Projects>
    </div>
  </div>
</template>

<style scoped>

</style>

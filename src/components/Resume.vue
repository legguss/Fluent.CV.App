<script setup lang='ts'>
import {onBeforeMount, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import Certificates from './Certificates.vue'
import EducationSection from './EducationSection.vue'
import Experience from './Experience.vue'
import HistoryList from './HistoryList.vue'
import PersonalInfo from './PersonalInfo.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
import Story from './Story.vue'
import Status from './Status.vue'
import {Resume} from '../models/Resume'

const cv = ref<Resume>({})
useRouter()
const route = useRoute()

onBeforeMount(async () =>
{
  const response = await fetch(`api/cv/${route.params.id}`)
  cv.value = await response.json()
  cv.value.Id = route.params.id
})

</script>

<template>
  <div class='o-resume' :class='cv.Styles?.Id'>

    <div class='o-resume-page o-resume-content' v-if='cv.Personal'>
      <div class='o-resume-content-main'>
        <div class='o-resume-left'>
          <div class='o-resume-image' v-if='cv.Styles?.Image'>
            <img src='../assets/attila.jpg' alt='PICS'/>
          </div>
          <div class='o-resume-name'>
            {{ cv.Personal?.FullName }}
          </div>
          <div class='o-current-title' v-if='cv.Personal?.Title'>
            {{ cv.Personal?.Title }}
          </div>

          <PersonalInfo :personal='cv.Personal'></PersonalInfo>

          <Skills :skills='cv.Roles' header='roles'></Skills>
          <Skills :skills='cv.Skills' header='skills'></Skills>
          <Skills :skills='cv.Foundations' header='foundations'></Skills>
          <Skills :skills='cv.Tools' header='tools'></Skills>
          <Skills :skills='cv.Products' header='products'></Skills>
          <Skills :skills='cv.Domains' header='domains'></Skills>
          <Skills :skills='cv.Languages' header='languages'></Skills>
          <Skills :skills='cv.Hobbies' header='hobbies'></Skills>

          <EducationSection :educations='cv.Education'></EducationSection>
          <Certificates :certificates='cv.Certificates'></Certificates>

        </div>
        <div class='o-resume-right'>
          <Story :story='cv.Story'></Story>
          <Status :statuses='cv.Statuses'></Status>
          <Experience :experiences='cv.Experiences'></Experience>
        </div>
      </div>
    </div>
    <div class='o-resume-page o-resume-content' v-if='cv.VisibleProjects && !cv.History'>
      <Projects :projects='cv.VisibleProjects'></Projects>
    </div>
    <div class='o-resume-page o-resume-content' v-if='cv.History'>
      <HistoryList :histories='cv.History'></HistoryList>
    </div>
  </div>
</template>

<style scoped>

</style>

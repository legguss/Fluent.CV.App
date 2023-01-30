<template>
  <div class="of-column o-project-section">
    <div class="of-column o-resume-project">
      <div class="o-resume-project-header">
        <div class="o-title">
          {{ project.Name }}
        </div>
        <div class="o-short-description">
          <span>{{ project.Summary }}</span>
        </div>
      </div>
      <div class="o-project-body">
        <div class="o-project-left">
          <div class="o-info o-statuses" v-if="project.Status">
            <div>status:</div>
            <div class="o-label" v-for="status in project.Status">{{ status }}</div>
            <div>type:</div>
            <div v-if="project.Type" class="o-status-labels">
              <div v-for="label in project.Type" class="o-label o-type">{{ label }}</div>
            </div>
          </div>
          <div class="o-description" v-if="project.Tasks">
            <div class="o-description-title">Main tasks</div>
            <template v-for="line in project.Tasks">
              <div class="o-project-description-line o-indent-1">
                <i class="fas fa-circle"></i>
                {{ line }}
              </div>
            </template>
          </div>
          <div class="o-description" v-if="project.Challenges">
            <div class="o-description-title">Challenges</div>
            <template v-for="line in project.Challenges">
              <div class="o-project-description-line o-indent-1">
                <i class="fas fa-circle"></i>
                {{ line }}
              </div>
            </template>
          </div>
        </div>
        <div class="o-project-right">
          <div class="o-label-table">
            <div v-if="project.Skills" class="o-label-row o-labels">
              <div class="o-labels-caption">skills:</div>
              <div class="o-labels-list">
                <div class="o-labels-container">
                  <div v-for="label in project.Skills" class="o-label o-skill">{{ label }}</div>
                </div>
              </div>
            </div>
            <div v-if="project.Roles" class="o-label-row o-labels">
              <div class="o-labels-caption">roles:</div>
              <div class="o-labels-list">
                <div class="o-labels-container">
                  <div v-for="label in project.Roles" class="o-label o-role">{{ label }}</div>
                </div>
              </div>
            </div>
            <div v-if="project.Tools" class="o-label-row o-labels"></div>
            <div class="o-labels-caption"> tools:</div>
            <div class="o-labels-list">
              <div class="o-labels-container">
                <div v-for="label in project.Tools" class="o-label o-tool">{{ label }}</div>
              </div>
            </div>
          </div>
          <div v-if="project.Domains" class="o-label-row  o-labels">
            <div class="o-labels-caption">domain:</div>
            <div class="o-labels-list">
              <div class="of-row">
                <div v-for="label in project.Domains" class="o-label o-area">{{ label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Project} from '../models/Resume'

defineProps<{ project: Project }>()

</script>

<style scoped>

</style>

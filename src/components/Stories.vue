<template>

  <div class="o-profile">
    <div class="o-profile-title">
      my story
    </div>
    <div class="o-profile-status">
      <div class="o-profile-info">

        <div class="o-story-line" v-for="story in stories">
          <i class="fas fa-circle"></i>
          <div>
            {{ story }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{ stories?: string[] }>()

</script>

<style scoped>

</style>

<template>
  <div class="flex flex-col gap-2">
    <span>Step: review</span>

    <span>Username: {{props.registrationData.userName}}</span>
    <span>Email: {{ props.registrationData.email}}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import type {PropType} from 'vue'
import {IRegistrationData} from "@/components/models/IStepsPayload";
const props = defineProps({
  registrationData:{
    type : Object as PropType<IRegistrationData>
  }
})

</script>

<style scoped>

</style>
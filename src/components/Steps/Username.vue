<template>
  <div class="flex flex-col gap-2">
    <span>Username:</span>
    <VInput
        v-model.trim="username"
        :dataType="'text'"
        :error="userNameValidationNotMatch"
        class="col-span-12"
        inputId="username"
        placeHolder="Enter Username"
        vname="username"
    ></VInput>
    <span v-if="userNameValidationNotMatch" class="text-red-500 text-[12px]">Invalid Username.</span>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import VInput from "@/components/utilities/VInput.vue";
import {IStepsPayload} from "@/components/models/IStepsPayload";

const userNameValidationNotMatch = ref<Boolean>(false)
const username = ref<string>('')
// check if an string is not empty, it does not contain special characters except _ , its longer than 3 characters and shorter than 15 characters
const userNameValidationRegex = /^[a-zA-Z0-9_]{4,15}$/
const emits = defineEmits<{
  (e: 'setPayload', payload: IStepsPayload): void
}>()

function validateInput() {
  if (userNameValidationRegex.test(username.value)) {
    emits('setPayload', {key: 'userName', value: username.value})
  } else {
    userNameValidationNotMatch.value = true
  }
}

defineExpose<{
  validateInput(): void
}>({
  validateInput,
})
</script>

<style scoped>

</style>

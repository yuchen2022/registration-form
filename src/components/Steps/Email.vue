<template>
  <div class="flex flex-col gap-2">
    <span>Email:</span>
    <VInput
        v-model="email"
        dataType="text"
        :error="emailValidationNotMatch"
        class="col-span-12"
        inputId="email"
        placeHolder="Enter Email"
        vname="email"
    ></VInput>
    <span v-if="emailValidationNotMatch" class="text-red-500 text-[12px]">Invalid email address.</span>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import VInput from "@/components/utilities/VInput.vue";
import {IStepsPayload} from "@/components/models/IStepsPayload";

const emailValidationRegex = /^\S+@\S+\.\S+$/
const emailValidationNotMatch = ref<Boolean>(false)
const email = ref<string>('')
const emits = defineEmits<{
  (e: 'setPayload', payload: IStepsPayload): void
}>()

function validateInput() {
  if (!email.value.includes(' ') &&email.value.includes('@')  ) {
    emailValidationNotMatch.value = false
    emits('setPayload', {key: 'email', value: email.value})
  } else {
    emailValidationNotMatch.value = true
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

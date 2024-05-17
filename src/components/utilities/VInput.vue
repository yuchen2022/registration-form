<template>
  <div>
    <span class="font-semibold ">{{ label }} </span>
    <div :class="{'mt-2':label}" class="relative rounded-lg   ">
      <div class="rounded-lg flex items-center     ">
        <input
            :id="inputId"
            v-model="modelValue"
            :class="[customCss,{'!border-red-500':error}]"
            :disabled="disabled"
            :inputmode="inputMode"
            :maxlength="maxLength"
            :name="vname"
            :placeholder="placeHolder"
            :type="dataType"
            class="w-full rounded-lg bg-gray-50 border border-gray-200   leading-10 ring-0 text-[14px] pr-2 placeholder:text-[14px] outline-0 px-2"
            dir="auto"
        />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

import {defineModel, watch} from "vue";
import {useUtils} from "@/composables/useUtils";

const modelValue = defineModel()
watch(() => modelValue.value, async (val) => {
  if (props.dataType === 'tel' || props.inputMode === 'numeric') {
    modelValue.value = useUtils.convertNumbers2English(val)
  }
})
let props = defineProps({
  dataType: {
    type: String,
    default: 'text'
  },
  inputId:{
    type: String,
    required:true
  },
  maxLength: {
    type: String
  },
  error: {
    type: Boolean,
    default: false
  },
  vname: {
    type: String,
    required: false
  },

  placeHolder: {
    type: String,
  },

  label: {
    type: String
  },
  customCss: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputMode: {
    type: String,
    default: 'text'
  }
})


</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>


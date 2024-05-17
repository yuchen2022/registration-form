<template>
  <div class="flex flex-col gap-2">
    <VInput
        v-model.trim="debouncedDescription"
        class="col-span-12"
        data-type="text"
        inputId="description"
        label="Description"
        placeHolder="Write Your Description"
    ></VInput>
    <span v-if="isDescriptionBalanced===true" class="text-green-500 text-[12px]">The text is balanced.</span>
    <span v-else-if="isDescriptionBalanced===false" class="text-red-500 text-[12px]">The text is not balanced.</span>
    <button class="btn bg-green-500 text-white p-2 rounded-xl" type="button" @click="isBalanced">isBalanced</button>
  </div>
</template>
<script>
import VInput from "@/components/utilities/VInput.vue";

export default {
  components: {VInput},
  data() {
    return {
      description: '',
      isDescriptionBalanced: false,
      specialCharacters: ['{', '}', '[', ']', '(', ')'],
      specialCharactersOpen: ['{', '[', '('],
      specialCharactersClose: ['}', ']', ')'],
      specialCharactersOpenCount: 0,
      specialCharsRegex: /[\(\){}\[\]]/,
      specialCharactersCloseCount: 0,
      specialCharactersInPair: {
        "{": 0,
        "}": 0,
        "(": 0,
        ")": 0,
        "[": 0,
        "]": 0,
      },
      specialCharactersInPair2: {
        "{": {
          pair: '}',
          count: 0
        },
        "}": {
          pair: '{',
          count: 0
        },
        "(": {
          pair: ')',
          count: 0
        },
        ")": {
          pair: '(',
          count: 0
        },
        "[": {
          pair: ']',
          count: 0
        },
        "]": {
          pair: '[',
          count: 0
        },
      },
      speCharacters: [
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
        [')', '('],
        ['}', '{'],
        [']', '['],
      ],
      timeout: null
    }
  },
  methods: {
    isBalanced() {
      this.isDescriptionBalanced = false
      if (this.description) {
        let descriptionArray = this.description.split('')
        if (this.specialCharsRegex.test(this.description)) {
          this.speCharacters.forEach((group) => {
            if(descriptionArray.includes(group[0]) &&descriptionArray.includes(group[1])){
              this.isDescriptionBalanced = true
            }else{
              return
            }
            // group.forEach((char) => {
              // if (descriptionArray.includes(char)) {
              //   this.isDescriptionBalanced = true
              // } else if (!descriptionArray.includes(char)) {
              //   this.isDescriptionBalanced = false
              //   return;
              // }
            // })
          })
        } else {
          this.isDescriptionBalanced = true
        }
        // Object.keys(this.specialCharactersInPair2).forEach((key) => {
        //   if (this.specialCharactersInPair2[key].count > 0) {
        //     if (this.specialCharactersInPair2[this.specialCharactersInPair2[key].pair].count > 0) {
        //       this.isDescriptionBalanced = true
        //       console.log('balanced')
        //     }else{
        //       this.isDescriptionBalanced = false
        //       console.log('not balanced')
        //       return
        //     }
        //   }
        // })
        // console.log(this.specialCharactersInPair2)
      }
      console.log(this.isDescriptionBalanced)
    }
  },
  watch: {
    description: function (val) {
      this.isBalanced()
    }
  }
  ,
  computed: {
    debouncedDescription: {
      get() {
        return this.description
      }
      ,
      set(val) {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          this.description = val
        }, 400)

      }
    }
  }
}
</script>


<style scoped>

</style>

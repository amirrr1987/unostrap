<template>
  <button
    :class="`bg-${props.type} hover:bg-${props.type}-700 text-white font-bold py-2 px-4 rounded-lg`"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps,onMounted,watch } from "vue";
import { z } from "zod";
import { dataValidator } from '../utils'

const types = ["primary", "sucsses", "error"];


const PropsSchema = z.object({
  type: z.enum(types),
})
const props = defineProps({
  type: 'primary'
});

onMounted(() => {
  dataValidator({schema: PropsSchema,data: props, component: 'TButton'})
})
watch(props, () => {
  dataValidator()
})

</script>

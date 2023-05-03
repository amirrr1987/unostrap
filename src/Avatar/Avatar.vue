<template>
<img :class="classComputed" class=":uno: rounded-full" :src="props.img" alt="Rounded avatar">
</template>

<script setup>
import { computed, defineProps, onMounted, watch } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({ isDevelopMode: true });

const PropsSchema = z.object({
  img: z.string(),
  size: z.string()
});const props = defineProps({
  img: "",
  size: ""
});
const classComputed = computed(() => {
    switch (props.size) {
        case 'xs':
            return 'w-8 h-8'
        case 'sm':
            return 'w-10 h-10'
        case 'base':
            return 'w-12 h-12'
        case 'lg':
            return 'w-14 h-14'
        case 'xl':
            return 'w-16 h-16'
    }
})
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props);
  if (!success) {
    clg.logger({
      name: "zod issues",
      value: error.issues,
      path: "Avatar.vue",
      line: "35",
      commit: "UAvatar props is failed",
      deactivate: false,
    });
  }
};
onMounted(() => {
  dataValidator();
});
watch(props, () => {
  dataValidator();
});
</script>

<style lang="less">

</style>

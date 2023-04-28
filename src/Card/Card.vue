<template>
  <figure class="card">
    <img class="card__img" :src="props.img" :title="props.title" :alt="props.title" />
    <figcaption>
      <h4>{{ props.title }}</h4>
      <p>{{ props.caption }}</p>
      <!-- <router-link :to="linkUrl">{{ props.linkLabel }}</router-link> -->
    </figcaption>
  </figure>
</template>

<script setup>
import { defineProps,onMounted,watch } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({isDevelopMode: true})

const PropsSchema = z.object({
  img: z.string(),
  title: z.string(),
  caption: z.string(),
  linkLabel: z.string(),
  linkUrl: z.string(),
})
const props = defineProps({
  img: '',
  title: '',
  caption: '',
  linkLabel: '',
  linkUrl: '',
});
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props)
  if (!success) {
    clg.logger({ name: "zod issues", value: error.issues, path: 'TCard.vue', line: '35', commit: "comment", deactivate: false })
  } 
}
onMounted(() => {
  dataValidator()
})
watch(props, () => {
  dataValidator()
})

</script>

<style lang="less">
.card{
  background-color: red;
  &__img{
    width: 400px;
    height: 300px;
  }
}
</style>

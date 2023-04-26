<template>
  <figure>
    <img :src="props.img" :title="props.title" :alt="props.title" />
    <figcaption>
      <h4>{{ props.title }}</h4>
      <p>{{ props.caption }}</p>
      <router-link :to="linkUrl">{{ props.linkLabel }}</router-link>
    </figcaption>
  </figure>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img: String,
  title: String,
  caption: String,
  linkLabel: String,
  linkUrl: String,
});
</script>

<template>
  <hello-world v-focus />
</template>

<script lang="ts" setup>
const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}
</script>

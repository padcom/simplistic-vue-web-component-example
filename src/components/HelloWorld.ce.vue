<template>
  <input tabindex="1">
  <button class="btn-primary" tabindex="2" @click="console.log('Hello!')">
    Hello, world!
  </button>
</template>

<style lang="postcss">
:host {
  display: block;
}

.btn-primary {
  padding: 4px 8px;
}
</style>

<template>
  <button class="btn-primary" @click="console.log('Hello!')">
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

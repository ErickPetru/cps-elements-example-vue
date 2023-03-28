<script setup lang="ts">
import { CpsButton } from "@cps-elements/web/components/button";
import { CpsIcon } from "@cps-elements/web/components/icon";

import { ref } from "vue";

const isWaiting = ref(false);
const message = ref("");

const onClick = () => {
  if (isWaiting.value) return;

  isWaiting.value = true;
  setTimeout(() => {
    message.value = `Atualizado às ${new Date().toLocaleTimeString()}.`;
    isWaiting.value = false;
  }, 1000);
};
</script>

<template>
  <cps-button variant="accent" :waiting="isWaiting" @click="onClick">
    <cps-icon slot="prefix" name="arrow-right" />
    Clique
  </cps-button>

  <p v-if="message">
    <cps-icon library="uil" name="clock-mono" />

    {{ message }}
  </p>
</template>

<style scoped>
:global(body) {
  font: var(--cps-text-body);
  background-color: var(--cps-fill-solid-primary);
  color: var(--cps-foreground-primary);
  padding: 1rem;
}

p cps-icon {
  font-size: 1rem;
  vertical-align: middle;
  margin-top: -2px;
}
</style>

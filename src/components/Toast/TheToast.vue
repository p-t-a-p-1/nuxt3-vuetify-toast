<script setup lang="ts">
import { useToastStore } from '~/store/toast'

const toastStore = useToastStore()
</script>

<template>
  <VSnackbar
    v-model="toastStore.isActive"
    multi-line
    timeout="1500"
    :color="toastStore.color"
    location="top center"
    variant="tonal"
    class="py-2"
    @on-vnode-unmounted="toastStore.unsetSnackbar()"
  >
    {{ toastStore.text }}
  </VSnackbar>
</template>

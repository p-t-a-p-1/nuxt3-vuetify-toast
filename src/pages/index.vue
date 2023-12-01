<script setup lang="ts">
import { useToastStore } from '~/store/toast'

const toastStore = useToastStore()
</script>

<template>
  <VContainer>
    <VBtn color="success" @click="toastStore.setSuccessToast('成功しました！')">
      成功トーストの表示</VBtn
    >
    <VBtn color="error" @click="toastStore.setErrorToast('失敗しました！')">
      失敗トーストの表示</VBtn
    >
  </VContainer>
</template>

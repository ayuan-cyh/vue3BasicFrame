<script setup lang="ts">
import { useCounterStore } from './store/module/counter'
const counter = useCounterStore()
console.log(counter.count);

</script>

<template>
  <router-view />
</template>

<style>
</style>

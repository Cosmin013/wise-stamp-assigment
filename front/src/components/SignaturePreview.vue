<template>
  <div class="m-3 p-5 border-4 border-gray-500 h-[300px] rounded" v-html="signature">

  </div>
</template>
<script setup>

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const signature = computed(() => store.getters.signature || "")
</script>
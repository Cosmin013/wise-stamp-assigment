<template>
  <div class="grid md:grid-cols-1 lg:grid-cols-2 h-fit">
    <Template
        v-for="template in allTemplates"
        :key="template._id"
        :template="template"
        :selected="selectedTemplateId === template._id"
        @click="setTemplateId(template._id)"
    />
  </div>
</template>
<script setup>
import Template from "./Template.vue";
import {useStore} from "vuex";
import {computed, onBeforeMount, onMounted} from "vue";

const store = useStore()

onBeforeMount(() => {
  store.dispatch('fetchTemplates')
})

const allTemplates = computed(() => store.getters.allTemplates || [])

const setTemplateId = (id) => {
  store.commit('setData', { templateId: id })
}

const selectedTemplateId = computed(() => store.getters.selectedTemplateId)
</script>
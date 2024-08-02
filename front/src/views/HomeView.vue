<template>
  <div class="grid grid-cols-3">
    <div  class="p-6 h-screen border-r-4 flex flex-col justify-between">
      <TemplateFieldsForm />
      <SignaturePreview />
    </div>
    <Templates class="col-span-2" />
  </div>
</template>

<script setup>
import Templates from "../components/Templates.vue";
import TemplateFieldsForm from "../components/TemplateFieldsForm.vue";
import SignaturePreview from "../components/SignaturePreview.vue";
</script>
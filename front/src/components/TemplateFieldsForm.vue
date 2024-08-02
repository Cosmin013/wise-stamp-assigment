<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="text-3xl text-center font-semibold mb-6">Create Signature</h2>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
      >Full name</label>
      <input
          v-model="form.fullName"
          type="text"
          id="fullName"
          name="fullName"
          class="border rounded w-full py-2 px-3 mb-2"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
      >Email</label>
      <input
          v-model="form.email"
          type="text"
          id="email"
          name="email"
          class="border rounded w-full py-2 px-3 mb-2"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
      >Phone</label>
      <input
          v-model="form.phone"
          type="text"
          id="phone"
          name="phone"
          class="border rounded w-full py-2 px-3 mb-2"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
      >Logo</label>
      <input
          type="file"
          @change="onFileSelected"
          id="logo"
          name="logo"
      />
    </div>

    <div>
      <button
          class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
          :disabled="isLoading"
      >
        Generate Signature
      </button>
    </div>
  </form>
</template>

<script setup>
import {computed, reactive} from "vue";
import {useStore} from "vuex";
import {useToast} from "vue-toastification";

const store = useStore()
const toast = useToast();

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  logo: null
});

const handleSubmit = async () => {
  store.commit('setData', {
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    logo: form.logo,
  })

  if (!store.getters.selectedTemplateId) {
    toast.error("Please select a template");
    return;
  }

  store.commit("setIsLoading", true)

  try {
    await store.dispatch('createSignature')
    toast.success("Template generated");
  } catch (e) {
    toast.error("Something went wrong generating the signature");
  } finally {
    store.commit("setIsLoading", false)
  }

}

const onFileSelected = (event) => {
  form.logo =  event.target.files[0]
}

const isLoading = computed(() => store.getters.isLoading)
</script>
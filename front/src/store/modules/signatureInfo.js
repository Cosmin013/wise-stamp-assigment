import {HTTP} from "../../http-common.js";

const state = {
    signatureData: {
        templateId: "",
        fullName: "",
        email: "",
        phone: "",
        logo: null,
    },
    isLoading: false,
    signature: ""
};

const getters = {
    signature: (state) => state.signature,
    selectedTemplateId: (state) => state.signatureData.templateId,
    signatureData: (state) => state.signatureData,
    isLoading: (state) => state.isLoading,
}


const actions = {
    async createSignature({ commit }) {
        const form = new FormData();
        form.append('fullName', state.signatureData.fullName);
        form.append('email', state.signatureData.email);
        form.append('phone', state.signatureData.phone);
        form.append('logo', state.signatureData.logo);

        const response = await HTTP.post(
            `templates/${state.signatureData.templateId}/generate-signature`,
                form
        );

        commit('setSignature', response.data.signature)
    },
}

const mutations = {
    setData: (state, formData) => {
        state.signatureData = {
            templateId: formData?.templateId || state.signatureData.templateId,
            fullName: formData?.fullName || state.signatureData.fullName,
            email: formData?.email || state.signatureData.email,
            phone: formData?.phone || state.signatureData.phone,
            logo: formData?.logo || state.signatureData.logo,
        }
    },

    setSignature: (state, signature) => {
        state.signature = signature
    },

    setIsLoading: (state, isLoading) => {
        state.isLoading = isLoading
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
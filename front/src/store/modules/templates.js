import {HTTP} from "../../http-common.js";

const state = {
    templates: []
};

const getters = {
    allTemplates: (state) => state.templates
}

const actions = {
    async fetchTemplates({ commit }) {
        const response = await HTTP.get('templates');
        commit('setTemplates', response.data)
    }
}

const mutations = {
    setTemplates: (state, templates) => {
        state.templates = templates?.templates || []
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
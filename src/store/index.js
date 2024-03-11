import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            formData: {}
        }
    },
    mutations: {
        setFormData(state, formData) {
            state.formData = formData
        }
    },
    actions: {
        updateFormData({ commit }, form) {
            commit('setFormData', form)
        }
    }
})

export default store
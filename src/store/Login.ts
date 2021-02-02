
import { Commit } from 'vuex'
const state: any = {
    userInfo: null
};

const mutations: any = {
    setLoginMessage(states: any, message: object) {
        states.userInfo = message
    },
    clearMessage(states: any) {
        states.userInfo = null
    }
}

const actions: any = {
    setLoginMessage(context: {commit: Commit}, message: object) {
        context.commit('setLoginMessage', message)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

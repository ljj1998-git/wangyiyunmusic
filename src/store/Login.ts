
import { Commit } from 'vuex'
const state: any = {
    userInfo: 0
};

const mutations: any = {
    setLoginMessage(states: any, message: object) {
        states.userInfo = message
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

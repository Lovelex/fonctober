export default {
	namespaced: true,
	state: {
		snackbar: {
			isActive: false,
			mode: 'success',
			text: '',
		}
	},
	getters: {
		getSnackbar: state => state.snackbar
	},
	mutations: {
		SET_SNACKBAR: (state, payload) => state.snackbar = {
			isActive: true,
			...payload
		}
	},
	actions: {
		setSnackbar({ commit }, payload) {
			commit('SET_SNACKBAR', payload)
		}
	}
}
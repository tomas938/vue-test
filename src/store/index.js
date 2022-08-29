import { createStore } from "vuex";

export default createStore({
	state() {
		return {
			projects: [
				{
					id: 1,
					name: "project-1",
				},
				{
					id: 2,
					name: "project-2",
				},
				{
					id: 3,
					name: "project-3",
				},
			],
		};
	},
	getters: {
		projects(state) {
			return state.projects;
		},
	},
	mutations: {},
	actions: {},
	modules: {},
});

<template>
	<div class="about">
		<h1>{{ this.selectedProject.name }}</h1>
		<projects></projects>
	</div>
</template>

<script>
import Projects from "@/components/Projects.vue";
export default {
	components: {
		Projects,
	},
	props: ["name"],
	data() {
		return {
			selectedProject: null,
		};
	},
	computed: {
		desco() {
			return this.selectedProject;
		},
	},
	created() {
		this.selectedProject = this.$store.getters["projects"].find((project) => project.name === this.name);
		console.log(this.selectedProject);
	},
};
</script>

<style lang="scss" scoped></style>

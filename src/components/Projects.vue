<template>
	<div class="projects">
		<router-link class="project" v-for="(project, index) in projects" :key="index" :to="{ name: 'project', params: { name: project.name } }">
			<div class="project__description">
				<h3>{{ project.name }}</h3>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "Projects",
	data() {
		return {
			projects: this.$store.getters["projects"],
		};
	},
};
</script>

<style lang="scss" scoped></style>

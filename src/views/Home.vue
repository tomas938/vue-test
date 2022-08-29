<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<Projects></Projects>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Projects from "@/components/Projects.vue";

export default {
	name: "Home",
	components: {
		HelloWorld,
		Projects,
	},
	data() {
		return {};
	},
};
</script>

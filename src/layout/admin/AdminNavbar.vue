<template>
	<div class="admin-navbar">
		<Drawer :drawer="drawer"/>
		<v-app-bar app >
			<v-app-bar-nav-icon @click="drawer.isActive = !drawer.isActive"/>
			<v-spacer/>
			<v-btn color="fs" exact :to="{ name: 'MainHome' }" outlined>
				<v-icon left>mdi-home</v-icon>
				<span>VOLTAR PARA HOME</span>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
import Drawer from './Drawer'
export default {
	components: { Drawer },
	data: () => ({
		drawer: {
			isActive: true
		}
	})
}
</script>

<style>
</style>
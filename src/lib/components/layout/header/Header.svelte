<script lang="ts">
	import Menu from '../menu/Menu.svelte';
	import MenuButton from '../menu/MenuButton.svelte';
	import ActionIcon from '../../ui/ActionIcon.svelte';
	import Logo from '$lib/components/layout/icons/Logo.svelte';
	import Bag from '$lib/components/layout/icons/Bag.svelte';
	import Phone from '../../ui/Phone.svelte';

	let isMenuOpen = $state(false);

	const phone = { number: '+380634441188', title: '063-444-11-88' };

	function closeMenu() {
		isMenuOpen = false;
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="header-block">
	<div class="header-content">
		<div class="logo-menu">
			<div class="header-logo">
				<ActionIcon icon={Logo} stretch={true} href="/" />
			</div>
			<div class="menu-block">
				<MenuButton {isMenuOpen} {toggleMenu} />
				<Menu {isMenuOpen} close={closeMenu} />
			</div>
		</div>
		<div class="actions-block">
			<!-- <div class="search-block">
				<Search isOverlay={isSearchOverlay} {toggleSearchOverlay} />
			</div> -->

			<Phone {phone} />
			<div class="icon-block">
				<!-- <div class="icon-loupe">
					<ActionIcon onclick={toggleSearchOverlay} icon={Loupe} />
				</div> -->
				<!-- <ActionIcon href="/wishlist" iconSrc={heart} /> -->
				<ActionIcon icon={Bag} href="/cart" />
			</div>
		</div>
	</div>
</div>

<style>
	.header-block {
		width: 100%;
		height: 56px;
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		/* background-color: rgba(var(--main-color-rgb), 0.1); */
		background-color: white;
	}

	.header-content {
		max-width: 1366px;
		margin: 0px auto;
		padding: 0px 12px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4px;
	}

	.logo-menu {
		display: flex;
		align-items: center;
	}

	.header-logo {
		width: 120px;
		height: 40px;
		color: var(--main-color);
	}

	.menu-block {
		margin-left: 12px;
		position: relative;
		flex-shrink: 0;
	}

	.actions-block {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}
</style>

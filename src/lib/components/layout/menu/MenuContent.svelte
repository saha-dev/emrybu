<script lang="ts">
	const { close } = $props();
	let mainMenu = $state(true);
	const additionalMenu = [
		{
			href: '/',
			title: 'Категорія 1',
			slug: '1'
		},
		{
			href: '/',
			title: 'Категорія 2',
			slug: '2'
		},
		{
			href: '/',
			title: 'Категорія 3',
			slug: '3'
		},
		{
			href: '/',
			title: 'Категорія 4',
			slug: '4'
		},
		{
			href: '/',
			title: 'Категорія 5',
			slug: '5'
		},
		{
			href: '/',
			title: 'Категорія 6',
			slug: '6'
		}
	];
</script>

<div class="menu-content">
	<h4 class="title" role="presentation" onclick={() => (mainMenu = !mainMenu)}>
		{#if mainMenu}
			Продукція
			<span class="arrow forward"></span>
		{:else}
			<span class="arrow back"></span>
			Назад
		{/if}
	</h4>
	<nav class="nav-list">
		{#if mainMenu}
			<a href="/cart" class="nav-link" onclick={close}>Корзина</a>
			<div class="nav-separator"></div>
			<a href="/orders" class="nav-link" onclick={close}>Мої замовлення</a>
			<a href="/customer" class="nav-link" onclick={close}>Мої дані</a>
		{:else}
			{#each additionalMenu as menu (menu.slug)}
				<a href={menu.href} class="nav-link" onclick={close}>{menu.title}</a>
			{/each}
		{/if}
	</nav>
</div>

<style>
	.title {
		color: var(--common-text-dark, #495057);
		font-size: 1.2rem;
		font-weight: bold;
		margin: 10px 0px;
		padding-bottom: 10px;
		display: flex;
		align-items: baseline;
		cursor: pointer;
		padding: 10px 15px;
	}

	.nav-separator {
		border-bottom: 2px solid var(--common-border);
	}

	.nav-list {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.nav-link {
		display: block;
		padding: 10px 15px;
		text-decoration: none;
		color: var(--common-text-dark, #495057);
		font-size: 1.2rem;
		border-radius: 4px;
		transition:
			background-color 0.2s,
			color 0.2s;
	}

	.nav-link:hover,
	.title:hover {
		background-color: var(--common-bg-hover, #e9ecef);
		color: #000;
	}

	.arrow {
		display: block;
		position: relative;
		width: 12px;
		height: 12px;
		font-size: 0;
		flex-shrink: 0;
	}

	.arrow::after {
		content: '';
		display: block;
		position: absolute;
		width: 8px;
		height: 8px;
		border-style: solid;
		border-width: 0 2px 2px 0;
	}

	.arrow.forward {
		margin-left: auto; /* Отодвигает стрелку вправо */
		margin-right: 0; /* Убедимся, что нет лишнего отступа */
	}
	.arrow.forward::after {
		transform: rotate(-45deg);
	}

	.arrow.back {
		margin-right: 8px; /* Отступ от стрелки до текста "Назад" */
		margin-left: 0;
	}
	.arrow.back::after {
		transform: rotate(135deg);
	}
</style>

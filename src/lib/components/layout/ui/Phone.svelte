<script>
	import Ico from '$lib/components/layout/icons/Phone.svelte';
	import ActionIcon from './ActionIcon.svelte';
	const { phone } = $props();
</script>

<div class="phone-block">
	<a href="tel:${phone?.number}" class="phone-link">
		<ActionIcon icon={Ico} />
		<span class="phone-title">{phone?.title}</span>
	</a>
</div>

<style>
	.phone-link {
		display: flex;
		align-items: center;
		gap: 6px; /* Отступ между иконкой и текстом */
		color: var(--common-text-dark); /*#373737; */
		font-weight: 500;
		font-size: 16px;
		transition: color 0.2s;
		text-decoration: none;
	}

	.phone-title {
		white-space: nowrap;
	}

	/* .phone-title:hover {
		color: var(--main-color);
		filter: brightness(90%);
	} */
</style>

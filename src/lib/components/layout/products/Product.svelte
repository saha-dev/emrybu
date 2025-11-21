<script>
	// import CartButtons from '$lib/components/ui/CartButtons.svelte';
	import Image from '$lib/components/ui/Image.svelte';

	const { id, name, price, description, imgUrl } = $props();
	const productUrl = `/products/${id}`;
	const imageUrl_168x168 = imgUrl.replace('w_400,h_400', 'w_168,h_168');
</script>

<div class="product-tile">
	<a href={productUrl} class="product-tile-link">
		<Image src={imageUrl_168x168} alt={name} className="image-container" />
	</a>
	<div class="product-content">
		<div class="product-title">{name}</div>
		<div class="product-info">
			<div class="product-weight">
				<!-- <span class="icon-scale">⚖</span> -->
				{description}
			</div>
		</div>
		<div class="product-price">{price} <span>₴</span></div>
		<!-- <CartButtons {id} {price} {minOrder} /> -->
	</div>
</div>

<style>
	.product-tile {
		width: 168px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 8px;
		background-color: var(--common-bg-light, #f8f9fa);
		border-radius: 8px;
		border: 2px solid transparent;
		overflow: hidden;
		transition: border-color 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		/* border: 1px solid var(--common-border-dark); */
	}

	.product-tile-link {
		position: relative;
		text-decoration: none;
		color: inherit;
		display: block;
		height: 100%;
	}

	.product-tile:hover {
		border-color: var(--main-color);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	}

	.product-content {
		width: 100%;
		color: var(--common-text-dark);
	}

	.product-title {
		font-size: 1.1rem;
		line-height: 1.3;
		/* 1. Устанавливаем высоту, которая точно соответствует двум строкам */
		/* (font-size * line-height * 2 строки) */
		/* В данном случае, это приблизительно 1.1rem * 1.3 * 2 = 2.86rem */
		height: calc(1.1rem * 1.3 * 2);
		/* 2. Логика ограничения текста */
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: 0px;
	}

	.product-info {
		line-height: 2;
		display: flex;
		justify-content: space-between;
	}

	.product-price {
		/* color: var(--main-color, #e24511); */
		color: var(--common-text-dark);
		font-weight: bold;
		text-align: right;
		font-size: 2rem;
		letter-spacing: 0.03em;
		margin: 8px 0px;
	}

	.product-price span {
		font-size: 1.5rem;
	}

	@media (min-width: 410px) {
		.product-tile {
			width: 188px;
		}
	}
</style>

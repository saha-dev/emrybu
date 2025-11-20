export interface Product {
	id: string;
	name: string;
	description: string;
	composition: string;
	imgUrl: string;
	categorySlug: string;
	isFavorite: boolean;
	price: number;
	promoPrice: number;
	discount: number;
	discountForbidden: boolean;
	blockedDays?: string[];
	excludedDaysOfWeek?: number[];
	availableTime?: string[];
}

export interface Category {
	id: string;
	name: string;
	slug: string;
	imgUrl: string;
	header: string;
}

export interface InitData {
	products: Product[];
	categories: Category[];
}

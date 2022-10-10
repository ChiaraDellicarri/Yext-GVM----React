export enum C_itemCategory {
	TACOS = "Tacos",
	QUESADILLAS = "Quesadillas",
	SIDES = "Sides",
	DRINKS = "Drinks",
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Ce_menuItem {
	richTextDescription?: string,
	slug?: string,
	name: string,
	c_itemCategory?: C_itemCategory,
	c_relatedMenu?: EntityReference[],
	photoGallery?: ComplexImage[],
	id: string,
}

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

export interface Ce_menu {
	richTextDescription?: string,
	slug?: string,
	name: string,
	c_relatedMenuItems?: EntityReference[],
	photoGallery?: ComplexImage[],
	id: string,
}

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

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_iniziativa {
	primaryPhoto?: ComplexImage,
	slug?: string,
	name: string,
	c_baseURL?: string,
	c_descrizioneBreve?: string,
	c_struttureCorrelate?: EntityReference[],
	id: string,
}

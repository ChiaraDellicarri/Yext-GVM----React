export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_regione {
	slug?: string,
	name: string,
	c_descrizioneBreve?: string,
	c_regioneStruttura?: EntityReference[],
	id: string,
}

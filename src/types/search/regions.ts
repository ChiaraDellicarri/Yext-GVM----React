export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_region {
	richTextDescription?: string,
	slug?: string,
	description?: string,
	name: string,
	dm_directoryChildren?: EntityReference[],
	dm_directoryChildrenCount?: string,
	dm_directoryManagerId?: string,
	dm_directoryParents?: EntityReference[],
	c_regionAbbreviation?: string,
	c_regionDisplayName?: string,
	id: string,
}

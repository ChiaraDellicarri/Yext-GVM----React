export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_root {
	richTextDescription?: string,
	slug?: string,
	description?: string,
	name: string,
	dm_directoryChildren?: EntityReference[],
	dm_directoryChildrenCount?: string,
	dm_directoryManagerId?: string,
	dm_directoryParents?: EntityReference[],
	id: string,
}

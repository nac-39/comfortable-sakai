import { ResourceEntry } from "./types";
export const decodeResourceFromAPI = (data: any): Array<ResourceEntry> => {
    const resourceEntries: Array<ResourceEntry> = [];
    data.content_collection.forEach((item: any) => {
        if (item.type !== "collection") {
            const resource: ResourceEntry = {
                title: item.entityTitle,
                url: item.url,
                type: item.type,
            };
            resourceEntries.push(resource);
        }
    });
    return resourceEntries;
};

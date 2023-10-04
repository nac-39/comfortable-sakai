import { Course } from "../../course/types";

export type ResourceEntry = {
    title: string;
    url: string;
    type: string;
};

export class Resource {
    constructor(public course: Course, public entries: Array<ResourceEntry>, public isRead: boolean) {}
    getEntries(): Array<ResourceEntry> {
        return this.entries;
    }
}

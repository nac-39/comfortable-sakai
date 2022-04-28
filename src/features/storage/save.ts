import { HostnameStorage } from "../../constant";

export const toStorage = (hostname: string, key: string, value: any): Promise<string> => {
    const entity: { [key: string]: [value: any] } = {};
    entity[key] = value;
    return new Promise(function(resolve) {
        chrome.storage.local.get(hostname, function (items: any) {
            if (typeof items[hostname] === "undefined") {
                items[hostname] = {};
            }
            items[hostname][key] = value;
            chrome.storage.local.set({ [hostname]: items[hostname] }, () => {
                resolve("saved");
            });
        });
    });
};

export const saveHostName = (hostname: string): Promise<string> => {
    return new Promise(function (resolve) {
        chrome.storage.local.set({ [HostnameStorage]: hostname }, () => {
            resolve("saved");
        });
    });
};

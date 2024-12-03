import { promises } from "fs";

const isFileExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};

export {
    isFileExist,
}
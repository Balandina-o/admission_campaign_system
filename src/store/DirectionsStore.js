import { makeAutoObservable } from "mobx";

class DirectionsStore {
    directionsList = [];

    constructor() {
        makeAutoObservable(this);
    }

    get dirList() {
        return this.directionsList;
    }

    setDirections(dir) {
        this.directionsList = dir;
    }

    findDirection(dir_id) {
        const dir = this.directionsList.find(x => x.id == dir_id);
        return dir;
    }

    updateDirInStore(dir_id, dirForEdit) {
        const dir = this.directionsList.find(x => x.id == dir_id);
        dir == dirForEdit;
        return dir;
    }

    removeDirInStore(dir_id) {
        this.directionsList = this.directionsList.filter((dir) => dir.id !== dir_id);
        return this.directionsList;
    }
}

export default DirectionsStore;

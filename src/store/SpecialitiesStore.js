import { makeAutoObservable } from "mobx";

class SpecialitiesStore {
    SpecialitiesList = [];

    constructor() {
        makeAutoObservable(this);
    }

    setSpecialities(spec) {
        this.SpecialitiesList = spec;
    }

    findSpeciality(spec_id) {
        const spec = this.SpecialitiesList.find(x => x.id == spec_id);
        return spec;
    }
}

export default SpecialitiesStore;

import { makeAutoObservable } from "mobx";

class SpecialitiesStore {
    specialitiesList = [];

    constructor() {
        makeAutoObservable(this);
    }

    get specList() {
        return this.specialitiesList;
    }

    setSpecialities(spec) {
        this.specialitiesList = spec;
    }

    findSpeciality(spec_id) {
        const spec = this.specialitiesList.find(x => x.id == spec_id);
        return spec;
    }

    updateSpecInStore(spec_id, specForEdit) {
        const spec = this.specialitiesList.find(x => x.id == spec_id);
        spec == specForEdit;
        return spec;
    }

    removeSpecInStore(spec_id) {
        this.specialitiesList = this.specialitiesList.filter((spec) => spec.id !== spec_id);
        return this.specialitiesList;
    }

    getNumberOfSpec() {
        return this.specialitiesList.length;
    }

    getListOfSpecForCadr() {
        let examValue = 1;
        const filteredSpec = this.specialitiesList.filter((spec) => spec.exam == examValue);
        return filteredSpec;
    }
}

export default SpecialitiesStore;

import { makeAutoObservable } from "mobx";

class ProtocolStore {
    _speciality = false;
    _number = false;

    constructor() {
        makeAutoObservable(this);
    }

    get speciality() {
        return this._speciality;
    }

    get number() {
        return this._number;
    }

    setSpec(spec) {
        this._speciality = spec;
    }

    setNumber(number) {
        this._number = number;
    }
}

export default ProtocolStore;

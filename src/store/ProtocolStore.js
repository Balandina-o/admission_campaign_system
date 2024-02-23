import { makeAutoObservable } from "mobx";

class ProtocolStore {
    _speciality = "";
    _number = "";

    constructor() {
        makeAutoObservable(this);
    }

    get speciality() {
        return this._speciality;
    }

    get number() {
        return this._number;
    }

    setSpecInStore(spec) {
        this._speciality = spec;
    }

    setNumberInStore(number) {
        this._number = number;
    }
}

export default ProtocolStore;

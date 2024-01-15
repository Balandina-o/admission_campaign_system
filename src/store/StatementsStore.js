import { makeAutoObservable } from "mobx";

class StatementsStore {
    statementsList = [];

    constructor() {
        makeAutoObservable(this);
    }

    get stateList() {
        return this.statementsList;
    }

    setStatements(stat) {
        this.statementsList = stat;
    }

    findStatement(stat_id) {
        const stat = this.statementsList.find(x => x.id == stat_id);
        return stat;
    }

    updateStateInStore(stat_id, statForEdit) {
        const stat = this.statementsList.find(x => x.id == stat_id);
        stat == statForEdit;
        return stat;
    }

    updateStateInStoreOneParam(stat_id, paramForEdit) {
        var stat = this.statementsList.map(el => el.id == stat_id ? { ...el, paramForEdit } : el);
        // const stat = this.statementsList.find(x => x.id == stat_id);
        // stat.name == paramForEdit;
        return stat;
    }

    removeStatInStore(stat_id) {
        this.statementsList = this.statementsList.filter((stat) => stat.id !== stat_id);
        return this.statementsList;
    }
}

export default StatementsStore;

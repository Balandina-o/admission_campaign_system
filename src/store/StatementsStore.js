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

    findStatementsBySpec(spec_id) {
        const filteredStates = this.statementsList.filter((x) => x.SpecialityId == spec_id)
        return filteredStates;
    }

    updateStateInStore(stat_id, statForEdit) {
        const stat = this.statementsList.find(x => x.id == stat_id);
        stat == statForEdit;
        return stat;
    }

    updateStateInStoreOneParam(stat_id, paramForEdit) {
        var stat = this.statementsList.map(el => el.id == stat_id ? { ...el, paramForEdit } : el);
        return stat;
    }

    removeStatInStore(stat_id) {
        this.statementsList = this.statementsList.filter((stat) => stat.id !== stat_id);
        return this.statementsList;
    }

    getNumberOfStatements() {
        return this.statementsList.length;
    }

    getNumberOfStatementsOfCadr(specList) {
        let counter = 0;
        console.log("specList", specList);
        for (let i = 0; i < this.statementsList.length; i++) {
            for (let j = 0; j < specList.length; j++) {
                if (this.statementsList[i].SpecialityId == specList[j].id) {
                    counter++;
                }
            }
        }
        // console.log("final = ", counter);
        return counter;
    }
}

export default StatementsStore;

import { makeAutoObservable } from "mobx";

class UsersStore {
    usersList = [];
    _user = {};
    _loggedIn = false;
    _isAdmin = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }

    setLoggedIn(loggedIn) {
        this._loggedIn = loggedIn;
    }

    get loggedIn() {
        return this._loggedIn;
    }

    setIsAdmin(isAdmin) {
        this._isAdmin = isAdmin;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    setUsersList(users) {
        this.usersList = users;
    }

    findUserInList(user_id) {
        const user = this.usersList.find(x => x.id == user_id);
        return user;
    }

    updateUserInStore(user_id, userForEdit) {
        const user = this.usersList.find(x => x.id == user_id);
        user == userForEdit;
        return user;
    }

    removeUserInStore(user_id) {
        this.usersList = this.usersList.filter((x) => x.id !== user_id);
        return this.usersList;
    }
}

export default UsersStore;

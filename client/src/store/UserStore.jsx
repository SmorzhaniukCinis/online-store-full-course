import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._User = {}
        makeAutoObservable(this)
    }
    setIsAuth (bool) {
        this._isAuth = bool
    }
    setUser (user) {
        this._User = user
    }

    get isAuth () {
        return this._isAuth
    }
    get user () {
        return this._User
    }
}

export class User {
    // tslint:disable-next-line: variable-name
    constructor(public email: string, public id: string, private _token: string, private _tokenExpDate: Date) {}

    get token() {
        if (!this._tokenExpDate || new Date() > this._tokenExpDate) {
            return null;
        }
        return this._token;
    }
}


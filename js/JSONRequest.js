export class JSONRequest{
    constructor(){
        this._requestURL = this.getRequestURL();
        this.request = new XMLHttpRequest();
        this.request.open('GET', this._requestURL);
        this.request.responseType = 'json';
    }

    getRequestURL(){
        throw new Error("O método getRequestURL é abstrato")
    }

    send(){
        throw new Error("O método send é abstrato")
    }
    
}
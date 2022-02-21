export class User {

    constructor(name) {
        this.setName(name)
    }

    getName () {
        return this.name;
    }

    setName(_name){
        this.name = _name;
    }
}

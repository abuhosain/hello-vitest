export class User {
    constructor(email){
        this.email = email;
    };

    updateEmail (newEmail){
        this.email = newEmail;
    };

    cleanEmail(){
        this.email = "";
    }
}
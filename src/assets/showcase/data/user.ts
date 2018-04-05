export class User {
    Name: string;
    Email: string;
    Country: Country = {code: '-1'};
    Password: string;

    constructor() {
    }
}

export class Country {
    code: string;
    name?: string;

    constructor() {
    }
}

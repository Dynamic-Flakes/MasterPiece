export class User {
    id: string;
    cooperativeId: string;
    mode: string;
    name: string;
    usertype: string
}

export class Vendor {
    id: string;
    mode: string;
    cooperativeId: string;
    name: string;
    usertype: string;
    phoneNo: string;
}

// User type enum
export class UserType {
    types = [
        { id: 1, name: 'cooperator' },
        { id: 2, name: 'vendor' }
    ]
}

// User mode enum
export class Mode {
    types = [
        { id: 1, name: 'New' },
        { id: 2, name: 'OTPverify' },
        { id: 3, name: 'TransPin'},
        { id: 4, name: 'Confirm' }
    ]
}
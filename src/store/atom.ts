import { atom } from "recoil";

export const clientInputAtom = atom({
    default: {
        clientName: '',
        businessName: '',
        clientAddress: '',
        city: '',
        stateName: '',
        contact: '',
        date: '',
        dueDate: '',
        terms: '',
        discount: '',
        saveName: '',
    },
    key: 'clientInputAtom'
});

export const billingInputAtom = atom({
    default: [{
        name: '',
        desc: '',
        quantity: '',
        price: '',
    }],
    key: 'billingInputAtom'
});

export const totalAmountAtom = atom({
    default: 0,
    key: 'totalAmountAtom'
})
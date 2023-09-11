import {atom} from 'recoil';


export const courseState=atom({
    key:'courseState',
    default:{
        title:"",
        description:"",
        imageLink:"",
        price:0
    },
})
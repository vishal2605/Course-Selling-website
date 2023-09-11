import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const coursePrice=selector({
    key:'couresPrice',
    get:({get})=>{
        const state=get(courseState);
        return state.price;
    },
});
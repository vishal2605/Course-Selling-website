import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const courseDescription=selector({
    key:'couresDescription',
    get:({get})=>{
        const state=get(courseState);
        return state.description;
    },
});
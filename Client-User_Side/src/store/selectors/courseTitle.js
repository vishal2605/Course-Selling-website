import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const courseTitle=selector({
    key:'couresTitle',
    get:({get})=>{
        const state=get(courseState);
        return state.title;
    },
});
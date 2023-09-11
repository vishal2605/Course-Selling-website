import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const courseImageLink=selector({
    key:'couresImageLink',
    get:({get})=>{
        const state=get(courseState);
        return state.imageLink;
    },
});
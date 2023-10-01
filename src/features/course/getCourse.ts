import { Course } from "./types";
import { decodeCourseFromArray } from "./decode";
import { fetchCourse } from "../api/fetch";
import { fromStorage } from "../storage";
import { CoursesStorage } from "../../constant";
import { fetchFavoriteCourseIds } from "../api/fetch";

export const getSakaiCourses = (): Array<Course> => {
    return fetchCourse();
};

export const getFavoriteCourses = (): Promise<Array<Course>> => {
    const courses = getSakaiCourses();
    const favoriteCourseIds = fetchFavoriteCourseIds();
    return favoriteCourseIds.then((ids) => {
        return courses.filter((course) => ids.includes(course.id));
    });
};

export const getStoredCourses = (hostname: string): Promise<Array<Course>> => {
    return fromStorage<Array<Course>>(hostname, CoursesStorage, decodeCourseFromArray);
};

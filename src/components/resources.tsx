import React, { useCallback, useState } from "react";
import { getSakaiCourses } from "../features/course/getCourse";
import { Resource, fetchResource } from "../features/api/fetch";
import { Course } from "../features/course/types";

function ResourceItem(props: { course: Course }) {
    const [resources, setResources] = useState<Resource>();
    const [didGetResource, setDidGetResource] = useState(false);
    const getResource = useCallback(async (course: Course) => fetchResource(course), []);
    const onClick = async () => {
        if (didGetResource) return;
        const res = await getResource(props.course);
        if (!res) return;
        setResources(res);
        setDidGetResource(true);
    };
    return (
        <div>
            <p>{props.course.name}</p>
            {didGetResource ? null : <button onClick={onClick}>Get Resource</button>}
            {resources && (
                <ul>
                    {resources.getEntries().map((entry) => (
                        <li key={entry.url}>
                            <a href={entry.url} target="_blank" rel="noreferrer">
                                {" "}
                                {entry.title}
                            </a>
                        </li>
                    ))}
                    ;
                </ul>
            )}
        </div>
    );
}

export function ResourcesTab() {
    const courses = getSakaiCourses();

    return (
        <div>
            {courses?.map((course) => {
                return <ResourceItem key={course.id} course={course} />;
            })}
        </div>
    );
}

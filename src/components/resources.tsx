import React, { useCallback, useState } from "react";
import { Resource, fetchResource } from "../features/api/fetch";
import { Course } from "../features/course/types";
import { getFavoriteCourses } from "../features/course/getCourse";

function ResourceItem(props: { course: Course }) {
    const [resources, setResources] = useState<Resource>();
    const [didGetResource, setDidGetResource] = useState(false);
    const existsResource = !!resources && resources.getEntries().length > 0;
    const isDisabled = !existsResource && didGetResource;
    const getResource = useCallback(async (course: Course) => fetchResource(course), []);
    const onClick = async () => {
        if (didGetResource) return;
        const res = await getResource(props.course);
        if (!res) return;
        setResources(res);
        setDidGetResource(true);
    };
    return (
        <details className={"cs-resources-item " + (isDisabled ? "disabled" : "")} onClick={onClick}>
            <summary>{props.course.name}</summary>
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
                </ul>
            )}
            {isDisabled && <p>No Resources</p>}
        </details>
    );
}

export function ResourcesTab() {
    const [courses, setCourses] = useState<Course[]>();
    getFavoriteCourses().then((courses) => setCourses(courses));

    return (
        <div className="cs-resources-tab">
            {courses?.map((course) => (
                <ResourceItem key={course.id} course={course} />
            ))}
        </div>
    );
}

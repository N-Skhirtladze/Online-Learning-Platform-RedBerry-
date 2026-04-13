import { useEffect, useState } from "react";
import EachFeaturedCourse from "./Each-featured-course";
import SkeletonCard from "./Skeleton-card";

const FeaturedCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URL = `https://api.redclass.redberryinternship.ge/api/courses/featured`;
        const fetchData = async () => {
            const api = await fetch(URL);
            try {
                if (!api.ok) throw new Error("Failed fetch data");
                const data = await api.json();
                setCourses(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log("UPDATED:", courses);
    }, [courses]);

    return (
        <section className="featured-courses">
            <h1 className="featured-title">Start Learning Today</h1>
            <p className="featured-text">Choose from our most popular courses and begin your journey</p>
            <div className="featured-curses-wrapper">
                {loading ?
                    Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />)
                    :
                    courses.map((course) => <EachFeaturedCourse key={course.id} course={course} />)
                }
            </div>
        </section>
    )
}

export default FeaturedCourses;
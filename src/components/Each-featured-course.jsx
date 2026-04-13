import { star } from "../assets"

const EachFeaturedCourse = ({ course }) => {

    return (
        <div className="each-featured-course">
            <img src={course?.image} alt="" className="featured-curse-image" />
            <div className="lecturer-raiting">
                <p className="lecturer">Lecturer {course?.instructor?.name}</p>
                <div className="rating">
                    <img src={star} alt="" />
                    <p className="avg-rating">{course?.avgRating}</p>
                </div>
            </div>
            <p className="each-featured-title">{course?.title}</p>
            <p className="featured-description">{course?.description}</p>
            <div className="featured-footer">
                <p className="featured-price">Starting from <span style={{ fontSize: "32px", fontWeight: "bold", color: "black" }}>${Math.round(course?.basePrice)}</span></p>
                <button>Details</button>
            </div>
        </div>
    )
}

export default EachFeaturedCourse;
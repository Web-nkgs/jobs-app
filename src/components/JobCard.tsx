import { Link } from "react-router-dom"
import { Job } from "../types/Job"
import "./JobCard.css"

type Props = {
    job: Job
}

const JobCard = ({ job }: Props) => {
    const showMoreHide = () => {

    } 
    return (
        <div className="card card--white card__job--size">
            <div className="job-card-body">
                <div className="job-title-section">
                    <label className="job-type">{job.type}</label>
                    <label className="job-title">{job.title}</label>
                </div>
                <p>{job.description}</p>
                <button className="show-hide-text-btn" onClick={() => { showMoreHide() }}>More</button>
                <label></label>
            </div>
            <hr className="seperator--color" />
            <div className="job-card-footer">
                <label>{job.location}</label>
                <Link to={`/jobs/${job.id}`}
                    className="link-button link-button--purple">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default JobCard

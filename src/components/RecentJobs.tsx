import { useEffect, useState } from "react"
import JobCard from "./JobCard"
import { Job } from "../types/Job"
import './RecentJobs.css'
import { Link } from "react-router-dom"

const API_URL = "http://localhost:8000/jobs"

const RecentJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await fetch(API_URL + "?_limit=3")
                let data: Job[] = await response.json()
                setJobs(data)
            } catch (error) {
                console.log("error: ", error);

            }
        }
        getJobs()
    }, [])

    return (
        <section className="recent-jobs-container">
            <div className="container--background-purple">
                <h2 className="title title--purple">Recent Jobs</h2>
                <div className="recent-jobs__cards-container">
                    {
                        jobs.map((job) => <JobCard key={job.id} job={job} />)
                    }
                </div>
            </div>
            <div className="view-jobs-container">
                <Link to={'/jobs/browse'} className="link-button link-button--black link-button--large">View All Jobs</Link>
            </div>
        </section>
    )
}

export default RecentJobs


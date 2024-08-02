import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Job } from "../types/Job"
import "./JobDetail.css"

const API_URL = "http://localhost:8000/jobs"

const JobDetail = () => {
    const { id } = useParams()
    const [job, setJob] = useState<Job | null>(null)

    useEffect(() => {
        const getJobById = async () => {
            const response = await fetch(API_URL + `/${id}`)
            const data = await response.json()
            setJob(data)
        }
        getJobById()
    })

    if (!job) return null

    return (
        <section className="job-detail-container container--background-purple">
            <div className="job-title-container card card--white">
                <div className="job-title-section">
                    <label className="job-type">{job.type}</label>
                    <label className="job-title">{job.title}</label>
                    <label>{job.location}</label>
                </div>
            </div>

            <div className="job-description-container card card--white">
                <label className="subtitle--small subtitle--purple">Job Description</label>
                <p>{job.description}</p>
                <label className="subtitle--small subtitle--purple">Salary</label>
                <p>{job.salary}</p>
            </div>

            <div className="company-container card card--white">
                <label className="subtitle--small subtitle--purple">Company Info</label>
                <label className="subtitle--medium ">{job.company.name}</label>
                <p>{job.company.description}</p>
                <hr className="seperator--color" />
                <label>Contact email: </label>
                <label>{job.company.contactEmail}</label>
                <label>Contact phone: </label>
                <label>{job.company.contactPhone}</label>
            </div>

            <div className="manage-job-container card card--white">
                <label className="subtitle--small subtitle--purple">Manage Job</label>
                <Link to={`/job/edit/${job.id}`} className="link-button link-button--purple">Edit Job</Link>
                <Link to={`/job/edit/${job.id}`} className="link-button link-button--red">Delete Job</Link>
            </div>
        </section>
    )
}

export default JobDetail


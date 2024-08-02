
import { useRef, useState } from "react"
import InputField from "../components/InputField"
import "./AddJob.css"
import { Job } from "../types/Job"
import { Company } from "../types/Company"
import TextAreaField from "../components/TextAreaField"
import SelectFieldContainer from "../components/SelectFieldContainer"

const API_URL = "http://localhost:8000/jobs"

const AddJob = () => {
    const [job, setJob] = useState<Job>({
        title: "",
        type: "Full-Time",
        location: "",
        description: "",
        salary: "Under $50K",
        company: undefined
    })

    const [company, setCompany] = useState<Company>({
        name: "",
        description: "",
        contactEmail: "",
        contactPhone: ""
    })

    const handleJobInputChange: React.ChangeEventHandler<
        HTMLInputElement |
        HTMLTextAreaElement |
        HTMLSelectElement> = (e) => {
            const { name, value } = e.target
            setJob((prevJob) => {
                return { ...prevJob, [name]: value }
            })
        }

    const handleCompanyInputChange: React.ChangeEventHandler<
        HTMLInputElement |
        HTMLTextAreaElement> = (e) => {
            const { name, value } = e.target
            setCompany((prevCompany) => {
                return { ...prevCompany, [name]: value }
            })
        }

    const createJob = async (jobToCreate: Job) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobToCreate)
        })
        const data = await response.json()
        console.log("data: ", data);

    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const jobToCreate: Job = {
            ...job,
            ...company
        }
        console.log("jobToCreate: ", jobToCreate);
        createJob(jobToCreate)
    }

    return (
        <section className="container__card-main--position">
            <div className="card card--white gg">
                <h1>Add Job</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="container--vertical-space">
                        <SelectFieldContainer
                            title="Job Type"
                            selectFieldName="type"
                            options={["Full-Time", "Part-Time"]}
                            handleSelectionChange={handleJobInputChange}
                        />
                        <InputField
                            title="Job Listing Name"
                            inputName="title"
                            inputPlaceholder="eg. Beautiful Apartment in Miami"
                            handleInputChange={handleJobInputChange} />
                        <TextAreaField
                            title="Description"
                            inputName="description"
                            inputPlaceholder="Add any job duties, expectations, requirments, etc."
                            handleInputChange={handleJobInputChange} />

                        <SelectFieldContainer
                            title="Salary"
                            selectFieldName="salary"
                            options={["Under $50K",
                                "$50K - 60K",
                                "$60K - 70K",
                                "$70K - 80K",
                                "$80K - 90K",
                                "$90K - 100K",
                                "$100K - 125K",
                                "$125K - 150K",
                                "$150K - 175K",
                                "$175K - 200K",
                                "Over $200K"]}
                            handleSelectionChange={handleJobInputChange}
                        />

                        <InputField
                            title="Location"
                            inputName="location"
                            inputPlaceholder="Company location"
                            handleInputChange={handleJobInputChange} />
                    </div>
                    <div className="container--vertical-space">
                        <h3>Company Info</h3>
                        <InputField
                            title="Company Name"
                            inputName="name"
                            inputPlaceholder="Company Name"
                            handleInputChange={handleCompanyInputChange} />
                        <TextAreaField
                            title="Company Description"
                            inputName="description"
                            inputPlaceholder="What does your company do?"
                            handleInputChange={handleCompanyInputChange} />
                        <InputField
                            title="Contact Email"
                            inputName="contactEmail"
                            inputPlaceholder="Email address for applicants"
                            handleInputChange={handleCompanyInputChange} />
                        <InputField
                            title="Contact Phone"
                            inputName="contactPhone"
                            inputPlaceholder="Optional phone for applicants"
                            handleInputChange={handleCompanyInputChange} />
                    </div>
                    <button>Add Job</button>
                </form>
            </div>
        </section>
    )
}

export default AddJob

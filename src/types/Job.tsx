import { Company } from "./Company"

export interface Job {
    id?: string
    title: string
    type: string
    location: string
    description: string
    salary: string
    company?: Company
}
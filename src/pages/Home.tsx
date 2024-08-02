
import RecentJobs from '../components/RecentJobs'
import SimpleCard from '../components/SimpleCard'
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className="sub-header">
                <h1>Become a React Dev</h1>
                <p>Find the React job that fits your skill set</p>
            </div>
            <div className='simple-card-container'>
                <SimpleCard
                    title={"For Developers"}
                    description={"Browse our React jobs and start your career today"}
                    buttonTitle={"Browse Jobs"}
                    cardBackgroundColor={"lightgray"}
                    linkBackgroundColor='black'
                    redirectTo='/jobs'
                />
                <SimpleCard
                    title={"For Employees"}
                    description={"List your job to find the perfect developer for the role"}
                    buttonTitle={"Add Job"}
                    cardBackgroundColor={"#C5CAE9"}
                    linkBackgroundColor='purple'
                    redirectTo='/jobs/add' />
            </div>
            <RecentJobs />
        </section>
    )
}

export default Home

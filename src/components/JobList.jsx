import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const JobList = ({jobApplications})=>{
    return (
        <div id="jobList">
            <div className="jobListHeader">
                <h2>Applications</h2>
                <input type="text" placeholder="Search" />
            </div>
            <div className="jobList">
                {jobApplications.map((data)=>(
                    <JobCard data={data}  key={crypto.randomUUID()}/>
                ))}
            </div>
        </div>
    )
}


const JobCard = ({data})=>{
    return (
        <div className="jobCard" >
            <div className="cardDetails">
                <h3>{data.company}</h3>
                <p><span>{data.status}</span></p>
                <p><span>{data.interview_stage}</span></p>
                <p>Applied On:<span>{new Date(data.date).toLocaleDateString()}</span></p>
            </div>
                <h4 className="jobTitle">{data.title}</h4>
            <div className="updateJobCard">
                <button><MdModeEditOutline /></button>
                <button><MdDelete/></button>
            </div>
        </div>
    )
}
export const JobList = ({jobApplications})=>{
    return (
        <div id="jobList">
            <div className="jobListHeader">
                <h2>Applications</h2>
                <input type="text" placeholder="Search" />
            </div>
            <div>
                {jobApplications.map((data)=>(
                    <div>
                        <p>Title:{data.title}</p>
                        <p>Company:{data.company}</p>
                        <p>Source:{data.source}</p>
                        <p>Date:{data.date}</p>
                        <p>Status:{data.status}</p>
                        <p>Interview_stage:{data.interview_stage}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
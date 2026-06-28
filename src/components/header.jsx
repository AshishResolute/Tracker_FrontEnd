export const Header = ({jobApplications})=>{
    return (
        <header key={'header'} id="header" className="header">
            <h1>Job Application Tracker</h1>
            <div>
                <span>Aplication Count={jobApplications.length}</span>
            </div>
        </header>
       
    )
}
export const JobForm = ()=>{
    return (
        <form action="" id="jobForm">
            <h2>Add New Application</h2>
            <label htmlFor="title">title:</label>
            <input type="text" id="title"/>
            <label htmlFor="company">Company:</label>
            <input type="text" id="company"/>
            <label htmlFor="source">Source:</label>
            <input type="text" id="source" placeholder="Enter Job Application URL"/>
            <label htmlFor="applied_date">Applied On:</label>
            <input type="date" id="applied_date"/>
            <input type="submit" />
        </form>
    )
}
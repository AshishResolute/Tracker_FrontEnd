export const JobForm = ({
  title,
  setJobTitle,
  company,
  setCompany,
  source,
  setSource,
  date,
  setDate,
  setJobApplications,
}) => {
  const formHandler = async (event) => {
    event.preventDefault();
    let formData = {
      title,
      company,
      source,
      date:new Date(date).toISOString()
    };
    try {
      const response = await fetch("http://localhost:3000/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newJobApplication = await response.json() // here used the repsonse recieved from backend as my frontend missed the id that is made by the backend and the data was not synced ,got stuck in delete functionality
        setJobApplications((prev) => {
          return [...prev, newJobApplication.data];
        });
      }
    } catch (error) {
      console.error(`Form submission failed!,${error.message}`);
    }
  };
  return (
    <form action="" id="jobForm" onSubmit={formHandler}>
      <h2>Add New Application</h2>
      <label htmlFor="title">title:</label>
      <input
        type="text"
        id="job_title"
        value={title}
        onChange={(event) => {
          setJobTitle(event.target.value);
        }}
      />
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="applied_company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <label htmlFor="source">Source:</label>
      <input
        type="text"
        id="job_source"
        value={source}
        onChange={(e) => {
          setSource(e.target.value);
        }}
        placeholder="Enter Job Application URL..."
      />
      <label htmlFor="applied_date">Applied On:</label>
      <input
        type="date"
        id="applied_date"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

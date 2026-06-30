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
        console.log(`Form data sent!`);
        setJobApplications((prev) => {
          return [...prev, formData];
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
          console.log(title);
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
          console.log(event.target.value);
          setDate(event.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

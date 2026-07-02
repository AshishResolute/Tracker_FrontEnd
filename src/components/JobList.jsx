import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const JobList = ({ jobApplications, setJobApplications,toggleModal }) => {
  return (
    <div id="jobList">
      <div className="jobListHeader">
        <h2>Applications</h2>
        <input type="text" placeholder="Search" />
      </div>
      <div className="jobList">
        {jobApplications.map((data) => (
          <JobCard
            data={data}
            key={crypto.randomUUID()}
            setJobApplications={setJobApplications}
            jobApplications={jobApplications}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </div>
  );
};

const JobCard = ({ data, setJobApplications, jobApplications,toggleModal }) => {
  const deleteJobApplication = async () => {
    const response = await fetch(
      `http://localhost:3000/application/${data.id}`,
      {
        method: "DELETE",
      },
    )
    const filteredJobApplications = jobApplications.filter((application) => {
      return application.id !== data.id;
    });
    setJobApplications([...filteredJobApplications]);
  };
  return (
    <div className="jobCard">
      <div className="cardDetails">
        <h3>{data.company}</h3>
        <p>
          <span>{data.status}</span>
        </p>
        <p>
          <span>{data.interview_stage}</span>
        </p>
        <p>
          Applied On:<span>{new Date(data.date).toLocaleDateString()}</span>
        </p>
      </div>
      <h4 className="jobTitle">{data.title}</h4>
      <div className="updateJobCard">
        <button onClick={toggleModal}>
          <MdModeEditOutline />
        </button>
        <button onClick={deleteJobApplication}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

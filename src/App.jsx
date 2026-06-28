import { useEffect } from "react";
import { Header } from "./components/header";
import { JobForm } from "./components/JobForm";
import { JobList } from "./components/JobList";
import {useState} from 'react'
export const App = () => {
  const [jobApplications,setJobApplications] = useState([])
  useEffect(()=>{
    const fetchJobApplications = async()=>{
      const fetchDetails =  await fetch(`http://localhost:3000/application`)
      console.log(fetchDetails)
      const userJobApplications = await fetchDetails.json()
      setJobApplications((prevApplications)=>{
        return [...prevApplications,userJobApplications.applications[0]]
      })
    }
    fetchJobApplications()
  },[])
  return (
    <>
      <Header jobApplications={jobApplications}/>
      <main id="main">
        <JobForm />
        <JobList jobApplications={jobApplications}/>
      </main>
      
    </>
  );
};

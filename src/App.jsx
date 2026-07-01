import { useEffect } from "react";
import { Header } from "./components/header";
import { JobForm } from "./components/JobForm";
import { JobList } from "./components/JobList";
import {useState} from 'react'
export const App = () => {
  const [jobApplications,setJobApplications] = useState([])
  const [jobTitle,setJobTitle]=useState('')
  const [company,setCompany]=useState('')
  const [source,setSource]=useState('')
  const [date,setDate]=useState('')
  useEffect(()=>{
    const fetchJobApplications = async()=>{
      const fetchDetails =  await fetch(`http://localhost:3000/application`)
      const userJobApplications = await fetchDetails.json()
      setJobApplications((prevApplications)=>{
        return [...prevApplications,...userJobApplications.applications]
      })
    }
    fetchJobApplications()
  },[])
  return (
    <>
      <Header jobApplications={jobApplications}/>
      <main id="main">
        <JobForm title={jobTitle} setJobTitle={setJobTitle} company={company} setCompany={setCompany} source={source} setSource={setSource} date={date} setDate={setDate} setJobApplications={setJobApplications}/>
        <JobList jobApplications={jobApplications} setJobApplications={setJobApplications}/>
      </main>
      
    </>
  );
};

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {

    // load data from database
    const jobs = useLoaderData();
    // console.log(jobs);

    const [appliedJobs, setAppliedJobs] = useState([]);
    // for sort by 
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === "Onsite") {
            const onsiteJObs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJObs);
        }

    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // system 1
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            //system 2
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs([...jobsApplied]);

            console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs])

    return (
        <div className="py-10 container mx-auto border-2">

            <div className="flex ">

                {/* left side */}
                <div className="w-1/2">
                    <h1 className="text-2xl text-center mb-4 border-b-2">Applied Jobs : {appliedJobs.length}</h1>
                    <ul>
                        {
                            displayJobs.map(job => <li key={job.id}>
                                <span className="border-2">
                                    {job.job_title} ||
                                    {job.company_name} ||
                                    {job.remote_or_onsite}
                                </span>
                            </li>
                            )}
                    </ul>
                </div>

                {/* right side  */}
                <div className="">
                    <details className="dropdown">
                        <summary className="btn">Sort By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>
            </div>


        </div>
    );
};

export default AppliedJobs;
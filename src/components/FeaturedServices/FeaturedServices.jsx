import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedServices = () => {


    const [jobs, setJobs] = useState([]);

    //load data 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="py-16 ">
            <h1 className="text-5xl font-bold text-center text-white mb-10">Featured Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mx-auto max-w-96 md:container">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="mx-auto w-fit mt-10">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-outline text-white ">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;
import { useLoaderData, useParams } from "react-router-dom";
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast('you have applied successfully !')
    }

    return (
        <div className="container mx-auto ">

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border-2 md:col-span-3 py-3">
                    <h1> <span className="text-xl font-semibold">Position :</span> {job.job_title}</h1>
                    <h4><span className="text-md font-semibold">Job Description :</span> {job.job_description}</h4>
                    <p><span className="text-md font-semibold">Responsibility :</span> {job.job_responsibility}</p>
                    <p><span className="text-md font-semibold">Educaional Requirement : </span> {job.educational_requirements}</p>
                    <p><span className="text-md font-semibold">Experience : </span> {job.experiences}</p>

                </div>

                <div className="border 2 py-3">
                    <div>
                        <h1 className="text-xl font-semibold border-b-2 border-black text-center">Job Details</h1>
                        <div>
                            <h1>{job.company_name}</h1>
                            <h2>{job.job_type}</h2>
                            <h3>{job.salary}</h3>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold border-b-2 border-black text-center">Contact Information</h1>
                        <div>
                            <p>{job.contact_information.phone}</p>
                            <p>{job.contact_information.email}</p>
                            <p>{job.contact_information.address}</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button onClick={handleApplyJob} className="btn btn-primary mx-auto w-full text-center">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";


const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} className="w-[60px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <p className="flex items-center gap-1 font-bold"><IoLocation className="text-xl" />{location}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-outline border-lime-600 border-2 hover:bg-lime-600 text-md text-black font-semibold">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Job;
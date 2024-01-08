import { FaTools } from "react-icons/fa";
import { TbEngine } from "react-icons/tb";
import { RiMotorbikeLine } from "react-icons/ri";
import { GiPaintBucket } from "react-icons/gi";
import { MdOutlineLocalCarWash } from "react-icons/md";
import { GrServices } from "react-icons/gr";

const CategoryList = () => {
    return (
        <div className=" px-3 pb-5">
            <h1 className="text-5xl font-bold text-center my-10 text-white">Our Services</h1>

            <div className="grid grid-rows-6 md:grid-rows-2 grid-flow-col  gap-4 mt-8">

                {/* item 1 */}
                <div className="hero bg-gradient-to-r from-zinc-500 to-zinc-800 max-h-80 text-white rounded-md">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className="text-5xl">
                            <FaTools />
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left font-semibold">Restoration</h1>
                            <p className="py-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>

                {/* item 2 */}
                <div className="hero bg-gradient-to-r from-zinc-500 to-zinc-800 max-h-80 text-white rounded-md">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className="text-5xl">
                            <TbEngine />
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left font-semibold">Engine Services</h1>
                            <p className="py-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>


                {/* item 3 */}
                <div className="hero bg-gradient-to-r from-zinc-500 to-zinc-800 max-h-80 text-white rounded-md">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className="text-5xl">
                            <RiMotorbikeLine />
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left font-semibold">Body Service</h1>
                            <p className="py-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>

                {/* item 4 */}
                <div className="hero bg-gradient-to-r from-zinc-500 to-zinc-800 max-h-80 text-white rounded-md">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className="text-5xl">
                            <GrServices />
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left font-semibold">Custom Modification</h1>
                            <p className="py-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>

                {/* item 5 */}
                <div className="hero bg-gradient-to-r from-zinc-500 to-zinc-800 max-h-80 text-white rounded-md">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className="text-5xl">
                            <GiPaintBucket />
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left font-semibold">Custom Paint</h1>
                            <p className="py-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>


                {/* item 6 */}
                <div className="hero bg-gradient-to-r from-zinc-500 to-zinc-800 max-h-80 text-white rounded-md">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className="text-5xl">
                            <MdOutlineLocalCarWash />
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left font-semibold">Wash & Clean</h1>
                            <p className="py-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CategoryList;
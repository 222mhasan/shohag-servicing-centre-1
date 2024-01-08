
const Blog = () => {
    return (
        <div>
            <div>
                <div className="hero bg-base-200 py-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/src/images/snow-bike.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-semibold">A MECHANIC’S GUIDE TO WINTER BIKE MAINTENANCE</h1>
                            <p className="py-6 text-justify">Whether you’re living in sunny Girona or facing wet, windy & cold weather for the next 6 months, every cyclist should take some steps to prepare their bike for winter. If the latter sums up the conditions you’re facing, the best bet is to simply buy a second bike prepped for harsh conditions, wrap your summer bike up in a blanket & store her away for winter. If you’re lucky enough to be able to ride the same bike all year, our mechanic WillemJan shares his 10 recommendations for prepping your bike for the winter months & tips for how to keep it running smoothly...</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
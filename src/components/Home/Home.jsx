import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedServices from "../FeaturedServices/FeaturedServices";

const Home = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <Banner></Banner>
                <CategoryList></CategoryList>
                <FeaturedServices></FeaturedServices>
            </div>
        </div>
    );
};

export default Home;
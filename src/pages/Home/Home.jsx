import About from "../../components/About/About";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div className="mt-2">
            <About></About>
            <Services></Services>
            <h2 className="text-7xl font-bold text-red-600 text-center">This is the home page of Poket School Learner</h2>
        </div>
    );
};

export default Home;
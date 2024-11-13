import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Teachers from "../../components/Teachers/Teachers";

const Home = () => {
    return (
        <div className="mt-2">
            <About></About>
            <Services></Services>
            <Teachers></Teachers>
            
        </div>
    );
};

export default Home;
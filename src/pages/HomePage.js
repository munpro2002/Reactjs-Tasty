import NavBar from "../components/NavBar/NavBar";
import Dishes from "../components/Dishes/Dishes";
import Footer from "../components/footer/Footer";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import AnimatedRoute from "../components/UI/AnimatedRoute";

const Home = (props) => {
  return (
    <AnimatedRoute>
      <NavBar />
      {!props.isLoading && <Dishes />}
      {props.isLoading && <LoadingSpinner />}
      <Footer />
    </AnimatedRoute>
  );
};

export default Home;

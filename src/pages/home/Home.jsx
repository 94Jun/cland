import Main from "../../components/main/Main";
import TopBar from "../../components/top_bar/TopBar";
import "./home.css";

const Home = () => {
  return (
    <div className="flex_column">
      <TopBar title={"Cland."} />
      <Main />
    </div>
  );
};

export default Home;

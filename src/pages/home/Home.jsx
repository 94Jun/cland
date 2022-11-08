import Main from "../../components/main/Main";
import TopBar from "../../components/top_bar/TopBar";
import "./home.css";

const Home = ({ scheduleList, setScheduleList }) => {
  return (
    <div className="flex_column">
      <TopBar title={"Cland."} />
      <Main scheduleList={scheduleList} setScheduleList={setScheduleList} />
    </div>
  );
};

export default Home;

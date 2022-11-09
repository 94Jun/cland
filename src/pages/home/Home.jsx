import Main from "../../components/main/Main";
import TopBar from "../../components/top_bar/TopBar";
import "./home.css";

const Home = ({
  scheduleList,
  setScheduleList,
  isModifyOn,
  setIsModifyOn,
  setIsAddScheduleModalOn,
  setModfiyItem,
}) => {
  return (
    <div className="flex_column">
      <TopBar title={"Cland."} />
      <Main
        scheduleList={scheduleList}
        setScheduleList={setScheduleList}
        isModifyOn={isModifyOn}
        setIsModifyOn={setIsModifyOn}
        setIsAddScheduleModalOn={setIsAddScheduleModalOn}
        setModfiyItem={setModfiyItem}
      />
    </div>
  );
};

export default Home;

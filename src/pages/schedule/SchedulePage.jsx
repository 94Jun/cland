import ScheduleList from "../../components/schedule_list/ScheduleList";
import TopBar from "../../components/top_bar/TopBar";

const SchedulePage = () => {
  return (
    <div className="flex_column">
      <TopBar title={"일정 목록"} />
      <ScheduleList />
    </div>
  );
};

export default SchedulePage;

import ScheduleList from "../../components/schedule_list/ScheduleList";
import TopBar from "../../components/top_bar/TopBar";

const SchedulePage = ({ scheduleList, setScheduleList, jsonScheduleList }) => {
  return (
    <div className="flex_column">
      <TopBar title={"일정 목록"} />
      <ScheduleList
        scheduleList={scheduleList}
        setScheduleList={setScheduleList}
        jsonScheduleList={jsonScheduleList}
      />
    </div>
  );
};

export default SchedulePage;

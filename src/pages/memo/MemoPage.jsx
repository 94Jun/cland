import TopBar from "../../components/top_bar/TopBar";
import MemoBoard from "../../components/memo/MemoBoard";
const MemoPage = () => {
  return (
    <div className="flex_column">
      <TopBar title={"메모"} />
      <MemoBoard />
    </div>
  );
};

export default MemoPage;

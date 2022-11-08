import TopBar from "../../components/top_bar/TopBar";
const MemoPage = () => {
  return (
    <div className="flex_column">
      <TopBar title={"메모"} />
      <div>
        <textarea></textarea>
      </div>
    </div>
  );
};

export default MemoPage;

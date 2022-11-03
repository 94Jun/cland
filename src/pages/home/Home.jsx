import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import TopBar from "../../components/top_bar/TopBar";
import './home.css';

const Home = ({scheduleList}) => {
  return (
    <div className='flex_column'>
      <TopBar title={"Cland."} />
      <Main scheduleList={scheduleList} />
    </div>
  );
}
 
export default Home;
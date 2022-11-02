import Header from "../../components/header/Header";
import TopBar from "../../components/top_bar/TopBar";
import './home.css';

const Home = () => {
  return (
    <div className='flex_column'>
      <TopBar title={"Cland."} />
      <main className="main">
        <div className="main_card">
          <div className="main_card_top">
            <span className="main_card_title">오늘 일정</span>
            <span className="main_card_quantity">0개</span>
          </div>
          <div className="main_card_item">
            <div className="main_card_item_top">
              <span className="main_card_item_title">개인 프로젝트 작성</span>
              <span className="main_card_item_importance">상</span>
            </div>
            <div className="main_card_item_middle">
              <p>react를 이용하여 SPA 작성</p>
            </div>
            <div className="main_card_item_bottom">
              <span>10.24. ~ 11.11.</span>
            </div>
          </div>
          <div className="main_card_item">

          </div>
        </div>
        <div className="main_card">
          <div className="main_card_top">
            <span className="main_card_title">고정된 메모</span>
            <span className="main_card_quantity">0개</span>
          </div>
          <div className="main_card_item">

          </div>
          <div className="main_card_item">

          </div>
        </div>
        <div className="main_card">
          <div className="main_card_top">
            <span className="main_card_title">진행중인 프로젝트</span>
            <span className="main_card_quantity">0개</span>
          </div>
          <div className="main_card_item">

          </div>
          <div className="main_card_item">

          </div>
        </div>
 
      </main>
    </div>
  );
}
 
export default Home;
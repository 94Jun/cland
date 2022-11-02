import './top_bar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState, memo } from 'react';

const TopBar = memo((props) => {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = (e) => { 
    setSearchValue(e.target.value);
  }
  return (
    <div className='top_bar_wrap'>
      <h2 className='top_bar_title'>{props.title}</h2>
      <div className='top_bar_user'>
        <input type='text' className='top_bar_search' onChange={onChangeSearch} value={searchValue} placeholder="검색할 내용을 입력하세요."></input>
        <SearchIcon></SearchIcon>
        <div className='top_bar_user_profile'>
          <img src='img/default_profile.png' className='user_profile_img'></img>
        </div>
      </div>
    </div>
  );
})
 
export default TopBar;
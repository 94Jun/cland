import { Link } from 'react-router-dom';
import { memo } from 'react';
import './set.css';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const Set = memo(() => {
  return (
    <div className='setting'>
      <ul>
        <Link to="/setting" style={{ textDecoration: "none" }}>
          <li className='nav_item'>
            <SettingsIcon></SettingsIcon>
            <span className='item_text'>환경 설정</span>
          </li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className='nav_item'>
            <LogoutIcon></LogoutIcon>
            <span className='item_text'>로그아웃</span>
          </li>
        </Link>
      </ul>
    </div>
  );
})
 
export default Set;
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  const { username, logOut } = useAuth();
  const history = useHistory();

  return (
    <header style={{ padding: '10px', background: '#f0f0f0' }}>
      <nav>
        <button onClick={() => history.push('/home')}>Home</button>
        <Link to="/home" style={{ margin: '10px' }}>
          Home
        </Link>
        {!username ? (
          <Link to="/login" style={{ margin: '10px' }}>
            Login
          </Link>
        ) : (
          <>
            <span>Welcome, {username}</span>
            <button onClick={logOut} style={{ marginRight: '10px' }}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

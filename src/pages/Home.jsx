import useAuth from '../hooks/useAuth';

export default function Home() {
  const { username } = useAuth();

  return (
    <div>
      <h2>Home Page</h2>
      {username ? (
        <p> Welcome back, {username}</p>
      ) : (
        <p> You are not logged in</p>
      )}
    </div>
  );
}

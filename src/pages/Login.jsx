import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const initialFormData = {
  username: '',
};
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: initialFormData,
    mode: 'onChange',
  });
  const username = watch(initialFormData.username);
  useEffect(() => {
    console.log(username);
  }, [username]);
  const { login } = useAuth();
  const history = useHistory();

  const onSubmit = (data) => {
    login(data.username);
    history.push('/home');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            {...register('username', { required: 'bişeyler yaz...' })}
          />
          {errors.username && (
            <span style={{ color: 'red' }}>{errors.username}</span>
          )}
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

import { useAppDispatch } from '../../hooks/redux';
import { loadJoke } from '../../store/reducers/jokeReducers';
import './Button.scss';

function Button() {
  const dispatch = useAppDispatch();
  function handleclick() {
    dispatch(loadJoke());
  }
  return (
    <button type="button" className="button" onClick={handleclick}>
      Nouvelle blague
    </button>
  );
}

export default Button;

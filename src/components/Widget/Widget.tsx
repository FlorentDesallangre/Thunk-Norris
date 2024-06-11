import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '../Button/Button';
import './Widget.scss';
import { loadJoke } from '../../store/reducers/jokeReducers';

function Widget() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadJoke());
  }, [dispatch]); // voir avec le prof
  const { joke, loading, error } = useAppSelector((state) => state.joke);

  return (
    <article className="widget">
      <p className="widget-content">{loading ? '...' : joke.value}</p>
      <p className="widget-error">{error}</p>
      <Button />
    </article>
  );
}
export default Widget;

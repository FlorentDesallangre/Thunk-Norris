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
  const joke = useAppSelector((state) => state.joke.joke.value);
  // mettre en place le store redux
  // dans un useEffect dispatcher une action asynchrone qui va fetch une blague
  // et qui automatiquement dispatcher une action.fullfilled
  // intercepter cette action fullfilled dan sle reducer pour ajouter la blague au state du store
  return (
    <article className="widget">
      <p className="widget-content">{joke}</p>
      <Button />
    </article>
  );
}

export default Widget;

import Button from '../Button/Button';
import './Widget.scss';

function Widget() {
  // mettre en place le store redux
  // dans un useEffect dispatcher une action asynchrone qui va fetch une blague
  // et qui automatiquement dispatcher une action.fullfilled
  // intercepter cette action fullfilled dan sle reducer pour ajouter la blague au state du store
  return (
    <article className="widget">
      <p className="widget-content">Un super blague hilarante</p>
      <Button />
    </article>
  );
}

export default Widget;

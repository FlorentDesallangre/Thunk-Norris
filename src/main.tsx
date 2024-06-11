import { createRoot } from 'react-dom/client';

import Widget from './components/Widget/Widget';

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <Widget />
);

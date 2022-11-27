import { BrowserRouter } from 'react-router-dom';

import Menu from './router/layouts/Menu';
import Content from './router/layouts/Content';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>

  );
}

export default App;

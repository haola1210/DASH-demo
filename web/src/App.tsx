import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import Tus from '@uppy/tus';

import './App.css'
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';

const uppy = new Uppy().use(Tus, { endpoint: 'http://localhost:3000/uploads' });

function App() {

  return (
    <div className="App">
      <Dashboard uppy={uppy} />
    </div>
  )
}

export default App

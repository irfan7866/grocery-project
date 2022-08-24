import React , {useState} from 'react';
import './App.css';

import FinalRouting from './Routes/FinalRouting';
import store from './Store/Store'
import {Provider} from 'react-redux'

function App() {

  store.subscribe(() => {
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()));
  })

  const [Auth , setAuth] = useState(false)

  return (
    <div>

      <Provider store={store}>

        <FinalRouting />

      </Provider>

    </div>
  );
}

export default App;
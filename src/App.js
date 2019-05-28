import React, {Suspense, lazy} from 'react';
import './App.css';

// const Profile = lazy(() => import('./components/Profile'))

import Counter from './components/Counter'

import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<div style={{fontSize: "72px"}}>Loading...</div>}>
        <Profile name='Mike'/>
      </Suspense> */}
      <Counter/>
      <TodoList/>
    </div>
  );
}

export default App;

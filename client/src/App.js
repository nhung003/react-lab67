import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Google from './Google';

import Header from './Header';
import List from './components/List';
import Edit from './components/Edit';
import Create from './components/Create';
import Add from './components/Add';
import Delete from './components/Delete';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes >

      <Route history={history} path='/' exact Component={List}></Route>
      <Route path='/new'  Component={Create}></Route>
      <Route path='/edit/:id' exact Component={Edit}></Route>
      <Route path='/delete' exact Component={Delete}></Route>
      <Route path='/add' exact Component={Add}></Route>
      </Routes>

      </BrowserRouter>
      <div>
          <Google></Google>
      </div>
    </div>
  );
}

export default App;

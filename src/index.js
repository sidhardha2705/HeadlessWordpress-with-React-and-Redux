import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/header'

import App from './components/app';
import reducers from './reducers';
import postsList from './components/posts-list';
import PostView from './components/post-view'
import MyComponent from './components/gallery'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/posts/:id' component={PostView}/>
          <Route path='/gallery' component={MyComponent}/>
          <Route path='/' component={postsList}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

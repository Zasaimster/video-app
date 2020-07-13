import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import Header from './Header'; 
import history from '../history';



const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit/:id' component={StreamEdit} />
                    <Route path='/streams/delete/:id' component={StreamDelete} />
                    <Route path='/streams/show' component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;
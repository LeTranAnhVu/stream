import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './commons/Header';

const App = () => {
    return (
        <section id="app">
            <Router history={history}>
                <Header/>
                <main className="ui container">
                    <div style={{marginTop: '30px'}}>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" component={StreamCreate}/>
                        <Route path="/streams/:id/edit" component={StreamEdit}/>
                        <Route path="/streams/:id/delete" component={StreamDelete}/>
                        <Route path="/streams/:id/show" component={StreamShow}/>
                    </div>
                </main>
            </Router>
        </section>

    );
};

export default App;

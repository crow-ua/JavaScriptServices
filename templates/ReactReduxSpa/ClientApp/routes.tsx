import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/counter' components={{ body: Counter }} />
    <Route path='/fetchdata' components={{ body: FetchData }} />
</Route>;
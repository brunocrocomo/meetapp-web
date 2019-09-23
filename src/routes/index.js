import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

import Profile from '../pages/Profile';

import NewMeetup from '../pages/Meetups/Entry/New';
import EditMeetup from '../pages/Meetups/Entry/Edit';
import Details from '../pages/Meetups/Details';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />

            <Route path="/meetups/new" component={NewMeetup} isPrivate />
            <Route path="/meetups/:id/edit" component={EditMeetup} isPrivate />
            <Route path="/meetups/:id/details" component={Details} isPrivate />
        </Switch>
    );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import Button from '~/components/Button';
import { Container, Content, Profile } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="Meetapp" />
                    </Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">My profile</Link>
                        </div>
                        <Button
                            type="button"
                            label="Logout"
                            onClick={handleSignOut}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

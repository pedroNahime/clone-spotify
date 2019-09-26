import React from 'react'

import {Container, Search, User} from './styles'

const Header = () => (
    <Container>
        <Search>
            <input type="text" placeholder='Search'/>
        </Search>
        <User>
            <img src="https://avatars0.githubusercontent.com/u/24299941?s=460&v=4" alt="Avatar"/>
            Pedro Nahime
        </User>
    </Container>
);

export default Header
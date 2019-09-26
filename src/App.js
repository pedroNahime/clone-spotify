import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import './styles/global'
import Sidebar from './components/Sidebar'
import Player from "./components/Player";
import Header from "./components/Header";
import {GlobalStyle} from "./styles/global";
import {Wrapper, Container, Content} from './styles/components'
import Routes from "./routes";

const App = () => (
    <Fragment>
        <GlobalStyle/>
        <BrowserRouter>
            <Wrapper>
                <Container>
                    <Sidebar/>
                    <Content>
                        <Header/>
                        <Routes/>
                    </Content>
                </Container>
                <Player/>
            </Wrapper>
        </BrowserRouter>
    </Fragment>
);

export default App;

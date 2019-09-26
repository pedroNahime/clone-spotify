import React from 'react'
import {Container, NewPlaylist, Nav} from './styles'
import addPlaylistIcon from '../../assets/images/add_playlist.svg'
const Sidebar = () => (
    <Container>
        <div>
            <Nav main>
                <li>
                    <a href="">Navegar</a>
                </li>
                <li>
                    <a href="">Radio</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>SUA BIBLIOTECA</span>
                </li>
                <li>
                    <a href="">Seu Daily Mix</a>
                </li>
                <li>
                    <a href="">Tocados Recentemente</a>
                </li>
                <li>
                    <a href="">Musicas</a>
                </li>
                <li>
                    <a href="">Albuns</a>
                </li>
                <li>
                    <a href="">Artistas</a>
                </li>
                <li>
                    <a href="">Estações</a>
                </li>
                <li>
                    <a href="">Arquivos Locais</a>
                </li>
                <li>
                    <a href="">Videos</a>
                </li>
                <li>
                    <a href="">Podcasts</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>PLAYLISTS</span>
                </li>
                <li>
                    <a href="">Melhores</a>
                </li>
            </Nav>
        </div>
        <NewPlaylist>
            <img src={addPlaylistIcon} alt="Adicionar Playlist"/>
            Nova Playlist
        </NewPlaylist>
    </Container>
);

export default Sidebar
import React from "react";
import { Link } from "react-router-dom"

// import anidb from '../images/react-movie-logo.svg';

import logo2 from '../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, ANIDBlogo } from "./Header/Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                // <LogoImg src={anidb} alt='logo1' />
            </Link>
            <ANIDBlogo src={logo2} alt='logo2' />

        </Content>
    </Wrapper>
);

export default Header;


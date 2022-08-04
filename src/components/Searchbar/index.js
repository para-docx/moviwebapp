import React, { useState, useEffect, useRef } from "react";

//image
import searchIcon from '../../images/search-icon.svg'

//styles
import { Wrapper, Content } from "./Searchbar.styles";


const SearchBar = ({ setSearchTerm }) => {
    const [state, setstate] = useState('');
    const initial = useRef(true);

    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(() =>{
            setSearchTerm(state);
        }, 1500)

        return () => clearTimeout(timer)

    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search icon' />
                <input
                    type='text'
                    placeholder="Search Movies"
                    onChange={eve => setstate(eve.currentTarget.value)}
                    value={state}

                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;
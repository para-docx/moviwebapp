import React from "react";

//styles
import {Wrapper, Content} from'../Grid/Grid.styles'

const Grid = ({headers, children,}) => (
    <Wrapper>
        <h1>{headers}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;
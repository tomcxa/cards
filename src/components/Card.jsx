import React from 'react'
import CardContainer from '../styled/CardContainer'


const Card = ({ children }) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export default Card

import React from 'react';

import Card from './components/Card'
import CardContent from './styled/CardContent'
import CardImg from './styled/CardImg'
import CardText from './styled/CardText'
import CardTitle from './styled/CardTitle'
import Button from './styled/Button'
import AppContainer from './styled/AppContainer'


function App() {
    const cards = [
        {
            img: 'card with img',
            title: 'Card title',
            text: 'Lorem kotoriy ipsumom pogonyaiut'
        },
        {
            title: 'Nekiy drugoi title',
            text: 'A text esche bolee menee srednee drugoi'
        }
    ]


    return (
        <AppContainer>
            {cards.map((card) => (
                <Card>
                    {card.img && <CardImg src={card.img} alt='Izobrajulya' />}
                    <CardContent>
                        <CardTitle>{card.title}</CardTitle>
                        <CardText>{card.text}</CardText>
                        <Button primary>Text btn</Button>
                    </CardContent>
                </Card>
            ))}
        </AppContainer>
    );
}

export default App;

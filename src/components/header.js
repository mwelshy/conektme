import React, {Component} from 'react';
import {Container, Button, Menu, Segment} from 'semantic-ui-react';

export class Hero extends Component {
    constructor() {
        super()
        this.state = {
            active: true,
            theColor: ''
        };
    }
    render() {
        const changeColor = (e) => {
            e.preventDefault();
            if (this.state.active === true ) {
                this.setState({
                    theColor: 'blue'
                })
            } else {
                this.setState({
                    theColor: 'black'
                })
            }
            this.setState({
                active: !this.state.active
            });
            console.log(this.state);
        };
        return (
            <div>
                <Segment inverted vertical center aligned className={'topBg'}>
                    <Container>
                        <Menu style={{backgroundColor: this.state.theColor}}>
                            <Menu.Item name='home'/>
                            <Menu.Item name='about'/>
                            <Menu.Item name='contact' color={'white'}/>
                            <Menu.Menu position='right'>
                                <Menu.Item name='logout'/>
                            </Menu.Menu>
                        </Menu>
                        <Button onClick={changeColor}>This is a button</Button>
                    </Container>
                </Segment>
            </div>

        )
    }
}


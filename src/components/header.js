import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Container, Button, Menu, Segment, Image} from 'semantic-ui-react';

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
                            <Menu.item>
                                <Image src='https://cdn.dribbble.com/users/3813/screenshots/285235/screen_shot_2011-10-05_at_10.54.15_am.png' size='small' />
                            </Menu.item>
                            <Menu.Item as={Link} name='home' to='/' />
                            <Menu.Item name='contact' color={'white'}/>
                            <Menu.Menu position='right'>
                                <Menu.Item as={Link} name='about' to='/register'>
                                    <Button primary>Register</Button>
                                </Menu.Item>
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


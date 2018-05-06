import React, {Component} from 'react';
import { Container, Input, Form, Checkbox, Button, Message } from 'semantic-ui-react';


export class RegisterForm extends Component {

    render() {
        const resetForm = (e) => {
            e.preventDefault();
            document.getElementById("register-form").reset();
        };
        return (
            <Container textAlign='left'>
                <Form id='register-form'>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder="Your Email" type='email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder="Your Password" type="password" />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit' onSubmit={resetForm}>Submit</Button>
                </Form>
            </Container>

        )
    }
}
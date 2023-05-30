import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, Form, BackgroundImg } from './styles';

import { UserInput } from '../../components/UserInput';

import { ButtonText } from '../../components/ButtonText';

import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>

                <p>Application to save and manage your useful links.</p>

                <h2>Log in</h2>

                <UserInput 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                <UserInput 
                placeholder="Password"
                type="password"
                icon={FiLock}
                />


                <div className='buttons'>
                <ButtonText title="To enter">  </ButtonText>

                <Button to="/register"title="Create an account" />
                </div>
            </Form>

            <BackgroundImg />
        </Container>
    )
}
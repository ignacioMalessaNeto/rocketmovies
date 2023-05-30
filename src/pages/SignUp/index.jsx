import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { RiArrowLeftLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import { Container, Form, BackgroundImg } from './styles';

import { UserInput } from '../../components/UserInput';

import { ButtonText } from '../../components/ButtonText';

import { Button } from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>

                <p>Application to save and manage your useful links.</p>

                <h2>Create your account</h2>

                <UserInput 
                placeholder="Name"
                type="text"
                icon={FiUser}
                />
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
                <ButtonText title="Register" />  
                <Button to="/"title="Back to login" icon={RiArrowLeftLine} ></Button>
                </div>

            </Form>

            <BackgroundImg />
        </Container>
    )
}
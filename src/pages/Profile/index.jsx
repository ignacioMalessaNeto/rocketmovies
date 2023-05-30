import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button';

import { ButtonText } from '../../components/ButtonText';

import { RiArrowLeftLine } from 'react-icons/ri';

import { UserInput } from '../../components/UserInput';

export function Profile() {
    return (
        <Container>
            <header>
                <Link>
                    <Button to="/" icon={RiArrowLeftLine} title="Return" />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/ignacioMalessaNeto.png" 
                    alt="User photo" 
                    />

                    <label htmlFor="Avatar">
                        <FiCamera />
                        <input 
                        id='avatar'
                        type="file" 
                        />
                    </label>

                </Avatar>
                
                <UserInput
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <UserInput
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <UserInput
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <UserInput
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />


                <ButtonText title="Salvar" />
            </Form>
        </Container>
    );
};
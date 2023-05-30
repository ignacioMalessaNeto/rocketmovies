import { Container, Profile, Logout, Brand} from './styles';

import { Link } from 'react-router-dom'

import { Input } from '../Input';

export function Header(){
    return(
        <Container> 
            <Link to="/"><button >RocketMovies</button></Link>

            <Input placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>      
                <Link to="/profile"><Brand><a href="/">Ignacio Malessa</a></Brand></Link>
                <Logout >
                    <Link to="/">Exit</Link>
                </Logout>
                </div>
                <Link to="/profile"><Brand><img src="https://github.com/ignacioMalessaNeto.png"alt="User photo"/></Brand></Link>
            </Profile>
                
        </Container>
    )
}
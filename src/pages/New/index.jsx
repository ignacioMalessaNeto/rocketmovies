import { Container, Form, ButtonAdd, ButtonRemove } from './styles';

import { Header } from '../../components/Header';

import { RiArrowLeftLine } from 'react-icons/ri';

import { Button } from '../../components/Button';

import { Input } from '../../components/Input';

import { Textarea } from '../../components/Textarea';

import { NoteItem } from '../../components/NoteItem';

export function New(){
    return(
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                    <Button to="/" icon={RiArrowLeftLine} title="Return" ></Button>
                    <h1>New film</h1>
                    </header>
                    <div className='inputs'>
                    <Input placeholder="Title" className='inputSearch'></Input>
                    <Input placeholder="Your grade (from 0 to 5)" className='inputSearch'></Input>
                    </div>

                    <Textarea placeholder="Comments" />

                    <h2>bookmarks</h2>
                    
                    <div className='bookmarks'>
                    <NoteItem value="React"/>
                    <NoteItem  isnew placeholder="New markerup"/>
                    </div>

                    <div className='buttons'>
                    <ButtonAdd><a href="#">Delete movie</a></ButtonAdd>
                    <ButtonRemove><a href="#">Save editions</a> </ButtonRemove>
                    </div>
                </Form>

            </main>
        </Container>
    )
}
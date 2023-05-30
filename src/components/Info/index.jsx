import  moment  from 'moment';
import React, { useState, useEffect } from 'react';
import { Container, ButtonStar, Stars, Data, Text, Creator,TimeAndAvatar } from './styles';
import { RiStarLine, RiStarFill, RiTimeLine } from 'react-icons/ri';
import { Tag } from '../Tag'

export function Info({ title, note }) {
  const [filledStars, setFilledStars] = useState([false, false, false, false, false]);

  useEffect(() => {
    setFilledStars([...Array(5)].map((_, index) => index < note.rating));
  }, [note.rating]);

  const handleStarClick = (index) => {
    const newFilledStars = filledStars.map((_, i) => i <= index);
    const newRating = index + 1;
    
    setFilledStars(newFilledStars);
    note.rating = newRating;
  };

  const dateTimeFromDatabase = note.dateTime;


  const formattedDateTime = moment(dateTimeFromDatabase).format('DD/MM/YY [to the] HH:mm');

  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <Stars>
          {filledStars.map((filled, index) => (
            <ButtonStar key={index} onClick={() => handleStarClick(index)}>
              {filled ? <RiStarFill /> : <RiStarLine />}
            </ButtonStar>
          ))}
        </Stars>
      </div>

      <TimeAndAvatar>
      <Creator>
        <button><img src="https://github.com/ignacioMalessaNeto.png"/></button>
        <p>Per  <button><a>{note.user}</a></button></p>
      </Creator>

      <Data>
        <RiTimeLine />
        {formattedDateTime}
      </Data>
      </TimeAndAvatar>

      {
        note.tags &&
        <footer>
          {
            note.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

      
      <Text>
        {note.description}
      </Text>

    </Container>
  );
}

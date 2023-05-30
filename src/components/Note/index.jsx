import { Container } from './styles';
import { RiStarLine, RiStarSFill } from 'react-icons/ri';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  let starIcons = [];

  if (data.rating === 5) {
    starIcons = Array.from({ length: data.rating }, (_, index) => (
      <RiStarSFill key={index} />
    ));
  } else {
    starIcons = Array.from({ length: 5 }, (_, index) => (
      index < data.rating ? <RiStarSFill key={index} /> : <RiStarLine key={index} />
    ));
  }

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div>
        {starIcons}
      </div>

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>

      }

    </Container>
  );
}

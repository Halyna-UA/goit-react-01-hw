import PropTypes from 'prop-types';
import { Container, Wrap, Avatar, Info, List, Item, SocialData } from './App.styled';

function Profil({ avatar, username, tag, location, stats: { followers, views, likes } }) {
  return (
    <Container>
      <Wrap>
        <Avatar src={avatar} alt={username} />
        <Info>{username}</Info>
        <Info>{tag}</Info>
        <Info>{location}</Info>
      </Wrap>

      <List>
        <Item>
          <SocialData>Followers</SocialData>
          <SocialData>{followers}</SocialData>
        </Item>
        <Item>
          <SocialData>Views</SocialData>
          <SocialData>{views}</SocialData>
        </Item>
        <Item>
          <SocialData>Likes</SocialData>
          <SocialData>{likes}</SocialData>
        </Item>
      </List>
    </Container>
  );
}

Profil.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,

    views: PropTypes.number.isRequired,

    likes: PropTypes.number.isRequired,
  }),
};

export default Profil;

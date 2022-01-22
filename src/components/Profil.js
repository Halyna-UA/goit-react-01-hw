import PropTypes from 'prop-types';
import { Container, Wrap, Avatar, Info, List, Item, SocialData } from './App.styled';

function Profil(props) {
  return (
    <Container>
      <Wrap>
        <Avatar src={props.avatar} alt={props.username} />
        <Info>{props.username}</Info>
        <Info>{props.tag}</Info>
        <Info>{props.location}</Info>
      </Wrap>

      <List>
        <Item>
          <SocialData>Followers</SocialData>
          <SocialData>{props.followers}1000</SocialData>
        </Item>
        <Item>
          <SocialData>Views</SocialData>
          <SocialData>{props.views}2000</SocialData>
        </Item>
        <Item>
          <SocialData>Likes</SocialData>
          <SocialData>{props.likes}3000</SocialData>
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
    // followersQuantity: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    // viewsQuantity: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    // likesQuantity: PropTypes.number.isRequired,
  }),
};

export default Profil;

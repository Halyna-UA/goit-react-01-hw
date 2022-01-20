import PropTypes from 'prop-types';
function Profil(props) {
  return (
    <div>
      <div>
        <img src={props.avatar} alt={props.username} />
        <p>{props.username}Jacques Gluke</p>
        <p>{props.tag}jgluke</p>
        <p>{props.location}Ocho Rios, Jamaica</p>
      </div>

      <ul>
        <li>
          <span>{props.followers}Followers</span>
          <span>{props.followersQuantity}1000</span>
        </li>
        <li>
          <span>{props.views}Views</span>
          <span>{props.viewsQuantity}2000</span>
        </li>
        <li>
          <span>{props.likes}Likes</span>
          <span>{props.likesQuantity}3000</span>
        </li>
      </ul>
    </div>
  );
}

Profil.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    followersQuantity: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    viewsQuantity: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    likesQuantity: PropTypes.number.isRequired,
  }),
};

export default Profil;

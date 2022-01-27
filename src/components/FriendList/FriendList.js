import PropTypes from 'prop-types';
import Friend from './Friend';
import { List, Item } from './FriendList.styled.js';

function FriendList({ friends }) {
  <List class="friend-list">
    {friends.map(friend => (
      <Item class="item" key={friend.id}>
        <Friend avatar={friend.img} name={friend.p} isOnline={friend.span} />
      </Item>
    ))}
  </List>;
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};
export default FriendList;

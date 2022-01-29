import { List, Item } from './FriendList.styled.js';
import PropTypes from 'prop-types';
import React from 'react';
import Friend from './Friend';

function FriendList({ friends }) {
  return (
    <List class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item class="item" key={id}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
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

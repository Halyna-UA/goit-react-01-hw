import React from 'react';
import { Item, Status, Avatar, Name } from './FriendList.styled.js';

const Friend = ({ avatar, name, status }) => {
  // const status = isOnline;
  console.log(status);
  return (
    <>
      <Item class="item">
        <Status class="status" status={status}>
          {status}
        </Status>
        <Avatar class="avatar" src={avatar} alt={name} width="48" />
        <Name class="name" name={name}>
          {name}
        </Name>
      </Item>
    </>
  );
};

export default Friend;

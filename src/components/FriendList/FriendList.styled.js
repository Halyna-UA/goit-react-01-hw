import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  list-style: none;
`;
export const Item = styled.li`
  width: 320px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #f5f10c;
  border-radius: 20px;
  background-color: #85e327;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 100px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  background-size: cover;
  background-position: center;
`;
export const Name = styled.p`
  color: #5e636e;
  line-height: 36px;
  font-weight: 900;
  letter-spacing: 0.25px;
`;

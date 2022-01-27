import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 8px;
  margin: 10px;
  list-style: none;
`;
export const Item = styled.li`
  width: 320px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: none;
  border-radius: 20px;
  background-color: #85a832;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  width: 100px;
  height: auto;
  background-size: cover;
  background-position: center;
`;
export const Name = styled.p`
  color: #5e636e;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.25px;
`;

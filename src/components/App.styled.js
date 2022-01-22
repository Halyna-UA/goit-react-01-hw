import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: coral;
  padding: 50px;
  width: 400px;
  height: auto;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  border: 1px solid;
  ${props => console.log(props.avatar)};
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 8px;
  color: #5e636e;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.25px;
`;
export const List = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
  margin: 0 px;
  list-style: none;
`;
export const Item = styled.li`
  padding: 30px;
`;
export const SocialData = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #5e636e;
`;

import styled from '@emotion/styled';

export const Container = styled.section`
  width: 320px;
  height: auto;
  background-color: #78f542;
  // text-align: center;
  // padding-top: 118px;
  // padding-bottom: 118px;
  margin: 0 auto;
`;
export const Title = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  color: #212121;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: space-betwen;
  justify-content: center;
  box-sizing: border-box;
  //flex-grow: 50%;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;
export const Item = styled.li`
  border: 1px solid #f59342;
  border-radius: 10px;
`;
export const StatisticsData = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #e042f5;
`;

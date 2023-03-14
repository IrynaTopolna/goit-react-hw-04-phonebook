import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 18px;
`;

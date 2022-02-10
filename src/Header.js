import styled from 'styled-components';

export default function Header({ children }) {
  return <HeaderCont className="Header">{children}</HeaderCont>;
}

const HeaderCont = styled.h1`
  border-bottom: 4px solid yellowgreen;
  border-top: 4px solid yellowgreen;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
`;

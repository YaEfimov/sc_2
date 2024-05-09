import './App.css';
import styled from 'styled-components';

import {StyledBtn, SupetButton} from './components/Button.styled';
import {Link} from './components/Link.styled';
import {Menu} from './components/Menu.styled';

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn as={Link} href='#'>LinkComponent</StyledBtn>
        <StyledBtn as='a' href='#'>Link</StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <SupetButton>Super button</SupetButton>
      </Box>    
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  // обращение к компоненте Link
  ${Link}{
    cursor: zoom-in;
  }
  
  // после 800 px элементы вертикальные
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }


`

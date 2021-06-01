import styled from 'styled-components';
import { DataDisplay } from './components/DataDisplay';
import { Globals } from './styles/Globals';

function App() {
  return (
    <>
      <Globals />
      <Header>
        <h1>Fetch Rewards Coding Exercise</h1>
      </Header>
      <Wrapper>
        <DataDisplay />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  /* height: 4em; */
  color: #ff9900;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

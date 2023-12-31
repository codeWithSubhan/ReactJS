import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.main`
  background: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* globalStyle can only be singlings of comp  */}
      <GlobalStyles />
      <StyledApp>
        <Row type='vertical'>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>
            <div>
              <Heading as='h2'>Check in and out </Heading>
              <Button onClick={() => alert('Check in')}>Check in</Button>
              <Button
                variation='secondary'
                size='small'
                onClick={() => alert('Check out')}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row type='vertical'>
            <Heading as='h3'>Form</Heading>
            <form action=''>
              <Input type='number' placeholder='Number of guest' />
              <Input type='number' placeholder='Number of guest' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

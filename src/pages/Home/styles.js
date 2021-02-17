import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  justify-content: space-between;
  align-items: center;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  padding: 5% 7%;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1534269222346-5a896154c41d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format');

  background-size: cover;

  section {
    width: 100%;
    height: 100%;

    display: flex;
  }
`

export const Days = styled.section`
  justify-content: flex-end;
  align-items: flex-end;

  opacity: 0.3;

  span {
    font-size: 4rem;
    font-weight: 500;

    margin-right: 1.5rem;
  }

  strong {
    font-size: 6.5rem;
    font-weight: 700;

    line-height: 100%;
  }
`

export const Main = styled.main`
  width: 150%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const HelloMessage = styled.p`
  display: flex;
  align-items: center;

  font-size: 4.5rem;
  font-weight: 500;

  letter-spacing: 3%;

  text-transform: uppercase;

  svg {
    margin-right: 2rem;
  }
`

export const Info = styled.p`
  display: flex;
  align-items: center;

  font-size: 2rem;
  font-weight: 200;

  svg {
    margin-right: 1rem;
  }
`

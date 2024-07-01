import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi2";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledFooter = styled.footer`
  grid-column: span 2;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  text-align: center;
  padding: 1rem 0;
  font-size: 1.4rem;
`;

const StyledArrow = styled(HiArrowRight)`
  margin-left: 0.5rem;
  color: var(--color-grey-100);
  vertical-align: middle;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <StyledFooter>
        Part Of Jonas Schmedtmann's The Ultimate React Course 2024: React,
        Next.js, Redux & More
        <Link to="https://www.udemy.com/share/108PTo3@7TaIm3zusBZ9wdfF1Zf6Q7Lmn7-ZGZaYyMPchUQUSw87sT5sNGQKmBhXYU37aSfHGA==/">
          <StyledArrow />
        </Link>
      </StyledFooter>
    </StyledAppLayout>
  );
}

export default AppLayout;

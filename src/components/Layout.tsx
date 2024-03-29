import styled from "styled-components";

import Container from "./Container";
import Pillar from "./Pillar";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;

  .main-body-content {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;

    .main-body-content {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

const Layout = ({
  children,
  colorMode,
  setColorMode,
}: {
  children: React.ReactNode;
  colorMode: string;
  setColorMode: (value: string) => void;
}) => {
  return (
    <StyledLayout>
      <Pillar colorMode={colorMode} setColorMode={setColorMode} />

      <main className="main-body-content">
        <Container>{children}</Container>
      </main>
    </StyledLayout>
  );
};

export default Layout;

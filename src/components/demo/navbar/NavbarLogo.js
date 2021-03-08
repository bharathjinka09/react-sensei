import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createImageCdnLink } from "../utils";
import { SenseiLogo } from "components/library";

const StyledWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  padding: ${(p) => p.theme.lenMd3} ${(p) => p.theme.lenMd3} 0;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    justify-content: center;
    margin-bottom: 0;
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: ${(p) => p.theme.lenLg3};
  background: ${(p) => p.theme.colorPrimary};

  @media (min-width: ${(p) => p.theme.screenWidthXs}) {
    height: ${(p) => p.theme.lenXl1};
  }

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    height: ${(p) => p.theme.lenXl3};
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const StyledSvgBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: relative;
  z-index: 1;
  width: 25%;
  border-radius: ${(p) => p.theme.lenSm2};
  box-shadow: ${(p) => p.theme.boxShadowLogo};

  @media (min-width: ${(p) => p.theme.screenWidthXs}) {
    width: 20%;
  }

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    width: 100%;
    min-height: 172px;
  }
`;

export default () => {
  return (
    <StyledWrapper>
      <StyledBackground />
      <StyledLink to="/">
        <StyledSvgBackground>
          <SenseiLogo />
        </StyledSvgBackground>
      </StyledLink>
    </StyledWrapper>
  );
};

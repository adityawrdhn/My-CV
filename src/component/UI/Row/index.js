  
import React from "react";
import styled, { css } from "styled-components";
import { StyledCol } from "../Col";
import Segment from "../Segment";

export const StyledRow = styled(Segment)`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${props => props.gutter ? -props.gutter+"px" : "" };
  margin-left: ${props => props.gutter ? -props.gutter+"px" : "" };
  
  > ${StyledCol} {
    padding-right: ${props => props.gutter ? props.gutter+"px" : "" };
    padding-left: ${props => props.gutter ? props.gutter+"px" : "" };
    ${props =>
      props.cols &&
      css`
        flex: 0 0 calc((1 / ${props.cols}) * 100%);
        max-width: calc((1 / ${props.cols}) * 100%);
      `}
  }
`;

const Row = props => {
  return <StyledRow {...props}>{props.children}</StyledRow>;
};

export default Row;
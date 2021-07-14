import styled from "styled-components";

export const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  height: 92vh;
  justify-content: center;
`;

export const StyledLogin = styled(StyledDiv)`
  & > form {
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0px 2px 8px gray;
    padding: 30px;
    width: 60%;
  }
`;

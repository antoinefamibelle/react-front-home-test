import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flexDirection: row;
  padding: 10px;
  boxShadow: 5px 5px 7px 2px rgba(0,0,0,0.76);
  marginTop: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flexDirection: column;
  justifyContent: space-evenly;
  height: 200px;
  width: 70%;
  backgroundSize: cover;
`;

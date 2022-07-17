import styled from "styled-components"

export const Container = styled.div`
  margin: 10px;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.color};
`

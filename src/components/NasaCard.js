import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: black;
`;

const CardP = styled.p`
  width: 50%;
`;

const NasaCard = props => {
  return (
    <PhotoContainer>
      <h1>{props.title}</h1>

      <h2>Date: {props.date}</h2>
      <p>Explanation: {props.explanation}</p>
      <img src={props.url}></img>
    </PhotoContainer>
  );
};

export default NasaCard;

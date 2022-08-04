import styled from "styled-components";

export const Image = styled.img `
  width: 100%;
  max-width: 720px;
  transition: all, 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  .overlay{
    position: absolute;
    background: rgba(0, 0,0,0.8)
    width: 100%;
    trasition: 0.5 ease;
    opacity: 0;
    bottom: 0;
    font-size:20px;
    padding:  20px;
    text-align: center;
  } 

  :hover {
      opacity: 0.4;
  }

  @keyframes animateThumb{
    from {
      color: 0;
    }
    to {
      color: 1;
    }
  }
`;
import styled from "styled-components";
import React from "react";
// import defaultimage from "../../public/img/profile.png";

const Image = (props) => {
  const { shape, src, size, width, height } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  // src: defaultimage,
  size: "40px",
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  object-fit: cover;
`;

const AspectInner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: center;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: auto;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;

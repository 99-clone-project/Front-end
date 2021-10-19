import styled from "styled-components";
import React from "react";
<<<<<<< HEAD
// import defaultimage from "../asset/img/default-user-image.png";
=======
import defaultimage from "../../public/img/profile.png";
>>>>>>> 1504f8d21007f48abfd9274ba4d1b083b2418b0c

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

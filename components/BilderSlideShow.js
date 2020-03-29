import React from "react";
import { Carousel } from "antd";

const BilderSlideShow = ({ element }) => {
  const { imageCount, _id } = element;

  let imageFileNames = [];

  for (let i = 1; i <= imageCount; i++) {
    imageFileNames.push(`/static/images/baeder/${_id}${i}.jpg`);
  }
  return (
    <Carousel autoplay>
      {imageFileNames.map(name => {
        return (
          <div key={name}>
            <img src={name} style={{ width: "100%" }}></img>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BilderSlideShow;

/*



<Carousel fade>
      {imageFileNames.map(name => {
        return (
          <Carousel.Item key={name}>
            <img src={name} className="d-block w-100"></img>
          </Carousel.Item>
        );
      })}
    </Carousel>


{
          imageFileNames.forEach(filename => (
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={`/static/images/baeder/${filename}.jpg`}
                alt="First slide"
              />
            </div>
          ))}




const BilderSlideShow = () => {
  const imageFileNames = [
    "fez-berlin-in-der-wuhlheide1",
    "kleine-schwimmhalle-wuhlheide3"
  ];

  return (
    <Carousel fade>
      {imageFileNames.map(name => {
        return (
          <Carousel.Item key={name}>
            <img
              src={`/static/images/baeder/${name}.jpg`}
              className="d-block w-100"
            ></img>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

*/

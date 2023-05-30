/* eslint-disable react/prop-types */
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({ img }) => {
  const data = img.map((item) => {
    return {
      url: "http://localhost:8000/" + item.name.toString(),
    };
  });
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={400}
        images={data}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
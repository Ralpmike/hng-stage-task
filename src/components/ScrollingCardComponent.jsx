import slide1 from "../assets/images/slideimage1.png";
import slide2 from "../assets/images/slideimage2.png";
import slide3 from "../assets/images/slideimg3.png";
import slid4 from "../assets/images/slideimg4.png";
import slide5 from "../assets/images/slideimg5.png";
import slide6 from "../assets/images/slideimg6.png";
import slide7 from "../assets/images/slideimg7.png";

export default function ScrollingCardComponent() {
  const images = [slide1, slide2, slide3, slid4, slide5, slide6, slide7];

  return (
    <div className="overflow-hidden w-full my-14">
      <div className="flex w-[200%] animate-slide gap-5">
        {images.map((image, index) => (
          <div className="flex-none w-1/5" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="flex-none w-1/5" key={`duplicate-${index}`}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

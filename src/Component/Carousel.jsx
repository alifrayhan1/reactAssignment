import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "John Doe",
    title: "Chief Strategy Officer",
    company: "Company",
  },
  {
    id: 2,
    quote:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    author: "Jane Smith",
    title: "Marketing Manager",
    company: "Company",
  },
  {
    id: 3,
    quote:
      "Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    author: "David Lee",
    title: "CEO",
    company: "Company",
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <>
      <section className="sm:p-16">
        <div className="flex justify-between">
          <div className="flex justify-start items-center hidden md:flex">
            <button
              onClick={handlePrev}
              className="bg-[#114a55] rounded-xl ml-2 h-10 w-10 flex justify-center items-center"
            >
              <img src="LeftArrow.png" alt="" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5 p-10 sm:p-16">
            <div className="bg-[#114a55] rounded-full h-12 w-12 flex items-center justify-center">
              <img src="Colon.png" alt="" className="h-[50%]" />
            </div>
            <p className="text-slate-400 w-2/3 text-xl">{currentTestimonial.quote}</p>
            <div className="text-center">
              <h3 className="text-teal-400 font-semibold text-lg">
                {currentTestimonial.author}
              </h3>
              <p className="text-slate-500 text-xs">
                {currentTestimonial.title} @ {currentTestimonial.company}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center hidden md:flex">
            <button
              onClick={handleNext}
              className="bg-[#114a55] rounded-xl mr-2 h-10 w-10 flex justify-center items-center"
            >
              <img src="RightArrow.png" alt="" />
            </button>
          </div>
        </div>
        <div className="flex space-x-4 justify-center mt-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-teal-400' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Carousel;


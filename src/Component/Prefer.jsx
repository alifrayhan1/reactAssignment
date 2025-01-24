// import React from "react";

const Prefer = () => {
  const listItems = [
    [{ text: "Quick to ramp" }, { text: "Quick to scale up" }],
    [
      { text: "Easy to optimize" },
      { text: "Works with all your existing tools" },
    ],
  ];

  return (
    <section className="m-5 px-5 py-10 sm:px-16 sm:py-16 bg-[url('BG2.png')] bg-no-repeat bg-cover bg-center rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-2xl sm:text-4xl font-semibold">
          Train your aiDR on your...
        </h1>
        <h1 className="text-teal-400 italic text-2xl sm:text-4xl font-semibold">
          preferred email stl
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mt-2">
          You’re in control. Train your aiDR on elements of your Marketing
          strategy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-300">
          {listItems.map((column, columnIndex) => (
            <div key={columnIndex} className="text-base sm:text-lg">
              <ul className="space-y-2">
                {column.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">
                      <img
                        src="ListIcon.png"
                        alt=""
                        className="h-4 w-4"
                      />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prefer;

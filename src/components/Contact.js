import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32 pt-36 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Where to find me...
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <a target="_blank" href="mailto: kyuneman@gmail.com">
              Email{" "}
            </a>
            |{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/katherine-yuneman/"
            >
              LinkedIn{" "}
            </a>
            |{" "}
            <a target="_blank" href="https://github.com/katherineyuneman/">
              GitHub{" "}
            </a>
            |{" "}
            <a target="_blank" href="https://medium.com/@kyuneman/">
              Medium{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

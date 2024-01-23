import React, { useEffect, useState } from "react";

export default function FirstPage() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center p-5 font-semibold text-3xl uppercase">
        State
      </h1>
      <p className="text-justify">
        State is the most fundamental concept of React. So whenever we need
        something to change in the user interface, we change the state. So we
        update something that we call state.
      </p>
      <div className="flex items-center p-5 gap-5">
        <button
          onClick={getAdvice}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg "
        >
          Get Advice
        </button>
        <h2 className="text-base text-red-600">{advice}</h2>
      </div>
      <div>
        <p className="mb-5 text-green-500">
          You have read <strong className="text-blue-500">{count}</strong>{" "}
          pieces of advice
        </p>
        <p className="text-justify">
          So useState() here is a function in React, which returns an array and
          so here, we are destructuring that array [advice, setAdvice]. So in
          the first position of the array, we have the value of the state that
          we call advice here and the second value is a setter function. So a
          function that we can use to update the piece of state. Whenever this
          piece of state is updated, the user interface will also be updated.
        </p>
        <p className="text-justify mt-5">
          Now, may be you notices that when we load the page, we have no advice
          here at all, and of course, we start at zero. So lets change that so
          whenever we open up the application for the first time, we already are
          greeted here with our very first piece of advice, and we can do that
          with something called an useEffect().
        </p>
        <p className="mt-5 text-justify">
          JSX - Which is basically just like HTML but we can add some JavaScript
          to it as well in curly braces.
        </p>
        <h1 className="text-center text-3xl font-semibold uppercase mb-5 mt-5">
          React
        </h1>
        <p className="mb-2">
          React is a JavaScript library for building user interfaces.
        </p>
        <p className="mb-2">
          Extremely popular || Declarative || Component-Based || State-Driven ||
          JavaScript library for building user interfaces, which is created by
          Facebook
        </p>
        <h1 className="text-center text-3xl font-semibold uppercase mb-5">
          React is Declarative
        </h1>
        <p>
          We describe how components look like and how they work using a
          declarative syntax called JSX. Declarative telling React what a
          component should look like, based on current data/state. React is
          abstraction away from DOM: we never touch the DOM. JSX: a syntax that
          combines HTML, CSS, JavaScript as well as referencing other
          components.
        </p>
      </div>
    </div>
  );
}

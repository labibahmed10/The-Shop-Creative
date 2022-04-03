import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl pt-10 pb-5">What is 'Context API' & what is it's purpose?</h1>

      <p className="text-xl">
        <span className="text-2xl">Answer: </span>In past we had always used prop drilling means we had to
        send any state's value or any other value one by one through other components to reach the exact one
        which needs via props.It is really time consuming and it takes the patience level of a developer.We
        had to send props through some of those child components for which they doesn't need it.But now there
        is a hook Api has been introduced by 'React' which name is useContext.First we have to create a
        context and have to give a default value and assign it to a variable.Then we have to use the variable
        name and provide it to the components who might need this context, we can pass any kind of value
        inside this context provider and under this provider those child component can access values by
        useContext and use it for any purpose.The main purpose of Context api is not to dril props and save
        times of coding in a efficient way.
      </p>
    </div>
  );
};

export default Blogs;

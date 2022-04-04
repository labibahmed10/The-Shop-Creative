import React from "react";

const Blogs = () => {
  return (
    <div className="w-3/4 mx-auto text-justify text-[#6c8881]">
      <div>
        <h1 className="text-center text-3xl pt-10 pb-5">What is 'Context API' & what is it's purpose?</h1>
        <p className="text-xl text-[#023047]">
          <span className="text-2xl">Answer: </span>In past we had always used prop drilling means we had to
          send any state's value or any other value one by one through other components to reach the exact one
          which needs by props(properties).It is really time consuming and it takes the patience level of a
          developer.We had to send props through some of the child components which they doesn't need it.But
          now there is a hook Api has been introduced by 'React' which name is useContext.First we have to
          create a context and have to give a default value and assign it to a variable.Then we have to use
          the variable name and provide it to the components who might need this context, we can pass any kind
          of value inside this context provider and under this provider those child component can access
          values by creating useContext hook and store it to a variable and use it for any purpose.The main
          purpose of ' Context api' is not to dril props and save times of coding in a efficient way.
        </p>
      </div>
      <div>
        <h1 className="text-center text-3xl pt-10 pb-5">What is Semantic Tag?</h1>

        <p className="text-xl text-[#023047]">
          <span className="text-2xl">Answer: </span>Semantic tag or HTML provides additional information about
          that document website.It tells the browser what is the meaning of the page and inside of it's
          content is.In October 2014, HTML4 got upgraded to HTML5 with some new semantic elements.
          <span>'header'</span>,<span>nav</span>,<span>div</span>,<span>footer</span> etc are the example of
          semantic tags.Semantic tags also helps search engine to read the page and find the required
          information faster.There is a standard rules to use semantic tags.
          <span>h1</span> - <span>h6</span> are also semantic tag.In the page if it's a heading then you must
          have to use <span>h1</span>
          and try not to repeat this <span>h1</span> tag again anywhere in the page.
        </p>
      </div>
      <div>
        <h1 className="text-center text-3xl pt-10 pb-5">
          Differnce between inline,block and inline-block element?
        </h1>

        <p className="text-xl pb-10 text-[#023047]">
          <span className="text-2xl">Answer: </span>In HTML there are various kind of elements for the
          browser.One of them is 'Display' property.It has so many values like
          flex,grid,inline,block,inline-block,hidden etc. <br />
          <br />
          Inline: An Inline element stays in a line and it does not starts a new line throughout the page.It
          only takes as much width as possible. <br />
          <br />
          Block: A Block level element always starts a new line and it takes the full width of the page by
          itself.The browser always add extra margin for this element. <br />
          <br />
          Inline-Block: Inline-block allows us to set a width and height on the element by ouselves.It acts as
          a block level element but actually a inline element.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

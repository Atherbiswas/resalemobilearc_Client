import React from "react";
import img1 from '../../../asstes/react state.png';
import img2 from '../../../asstes/prototypical.png';
import img3 from '../../../asstes/unit test.png';
import img4 from '../../../asstes/angular_react_vue_main.jpg'

const Blog = () => {
  return (
    <div>
      <div className="card lg:w-8/12 bg-base-100 shadow-2xl mx-auto mt-5">
        <figure>
          <img src={img1} alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">01</div>
            What are the different ways to manage a state in a React application?
          </h2>
          <p>**The Four Kinds of React State to Manag</p>
          <div>
            <p>1. Local state: Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook</p>
            <br />
            <p>2. Global state: Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
            <br />
            <p>3. Server state: Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
            <br />
            <p>4. URL state:  Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
          </div>
        </div>
      </div>
      <div className="card lg:w-8/12 bg-base-100 shadow-2xl mx-auto mt-5">
        <figure>
          <img src={img2} alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">02</div>
            How does prototypical inheritance work?
          </h2>
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
          <p>When we read a property from object, and its missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon well study many examples of such inheritance, as well as cooler language features built upon it.The property [[Prototype]] is internal and hidden, but there are many ways to set it.</p>
          <p>The prototype is only used for reading properties.Write/delete operations work directly with the object.An interesting question may arise in the example above: what’s the value of this inside set fullName(value)? Where are the properties this.name and this.surname written: into user or admin?The answer is simple: this is not affected bprototypes at all.No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.So, the setter call admin.fullName= uses admin as this, not user.</p>
        </div>
      </div>
      <div className="card lg:w-8/12 bg-base-100 shadow-2xl mx-auto mt-5">
        <figure>
          <img src={img3} className="lg:w-3/5" alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">03</div>
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
          <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems:</p>
          <p>The most common problems we have with unit testing usually aren't technical problems.People have a hard time adapting to new ways of working after spending time in an environment where unit testing amounts to loading up the latest build and seeing whether it starts or not can be difficult. Test infected groups are a cultural phenomenon. I have had the most success in changing how testing is done by finding one person that is interested and invested in staying up to date.</p>
        </div>
      </div>
      <div className="card lg:w-8/12 bg-base-100 shadow-2xl mx-auto mt-5">
        <figure>
          <img src={img4} className="lg:w-3/5" alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">04</div>
            React vs. Angular vs. Vue?
          </h2>
          <p>React: React suits best projects that aim for simple front-end, but at the same time with the ambition to scale to the highest possible level.React is a perfect choice, if you want to learn one of the most popular frameworks in almost no time due to its code simplicity</p>
          <p>Angular: Angular best fits in advanced and continously growing projects, that are capable of using its full potential.Angular is a good choice, if you are willing to sacrifice some time to learn TypeScript.</p>
          <p>Vue: Vue.js best advantage is its performance, if you want your project to perform as fast as possible, Vue.js is your bet.Vue.js is begginer-friendly with its simple structure. You can learn new technologies and get, as for now, rare qualifications.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

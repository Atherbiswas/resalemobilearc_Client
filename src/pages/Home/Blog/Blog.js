import React from "react";
import img1 from '../../../asstes/react state.png'
import img2 from '../../../asstes/prototypical.png'
import img3 from '../../../asstes/unit test.png'

const Blog = () => {
  return (
    <div>
      <div className="card lg:w-8/12 bg-base-100 shadow-2xl mx-auto mt-5">
        <figure>
          <img src={img1} alt="Shoes" />
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
          <img src={img2} alt="Shoes" />
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
          <img src={img3} className="lg:w-3/5" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">03</div>
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card lg:w-8/12 bg-base-100 shadow-2xl mx-auto mt-5">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">NEW</div>
            Shoes!
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

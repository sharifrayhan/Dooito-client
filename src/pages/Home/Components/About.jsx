import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = () => {
  return (
    
    <section >
        <Navbar></Navbar>
        <div className="py-8 px-[30px] md:px-[50px] lg:px-[200px]  mt-9">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Dooito</h2>
        <p className="text-gray-300 mb-8">
          Welcome to Dooito, where productivity meets simplicity! We are passionate about helping individuals and teams stay organized, focused, and in control of their tasks. Our mission is to provide a seamless task management experience that empowers you to achieve your goals with ease.
        </p>

        <h3 className="text-lg font-bold mb-4">Our Story</h3>
        <p className="text-gray-300 mb-8">
          Dooito was founded with a simple idea: make task management enjoyable and effective. We understand the challenges of juggling multiple responsibilities and projects, and we wanted to create a solution that simplifies your workflow.
        </p>

     

        <h3 className="text-lg font-bold mb-4">Our Commitment</h3>
        <p className="text-gray-300 mb-8">
          At Dooito, we are committed to continuous improvement. We value user feedback and actively incorporate suggestions to enhance our platform. Our dedicated team works tirelessly to bring you new features, updates, and improvements to make your experience even better.
        </p>

        <h3 className="text-lg font-bold mb-4">Join Us on the Productivity Journey</h3>
        <p className="text-gray-300 mb-4">
          Whether you're a freelancer, student, or part of a large organization, Dooito is here to elevate your productivity. Join us on the journey towards efficient task management and let's make achieving your goals a delightful experience.
        </p>

        <Link to="/Login">
          <button className="btn btn-primary"> Get Started</button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default About;

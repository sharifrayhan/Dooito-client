import {
    CalendarPlus,
    ListTodo,
    CircleUserRound,
    Home
  } from "lucide-react";
import Profile from "../pages/Home/Dashboard/Components/Profile";
import AddTask from "../pages/Home/Dashboard/Components/AddTask";
import Tasks from "../pages/Home/Dashboard/Components/Tasks";



const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "YT Channel",
      title: "YT Channel",
    },
    {
      id: "faq",
      title: "FAQ",
    },
  ];


  
  const mainLinks = [
    {
      id: 1,
      label: "profile",
      icon: <CircleUserRound />,
      component: <Profile></Profile>
    },
    {
        id: 2,
        label: "Manage Tasks",
        icon: <ListTodo />,
        component: <Tasks></Tasks>
      },
    {
      id: 3,
      label: "Add Task",
      icon: <CalendarPlus />,
      component: <AddTask></AddTask>
    },
  ];
  
  const additionalLinks = [
    {
      id: 5,
      label: "Home",
      icon: <Home />,
    },
  ];

  const FAQ = [
    {
      question: "How can I start using Dooito for task management?",
      answer: "To get started with Dooito, simply sign up for an account on our website. Once registered, you can start creating and managing your tasks efficiently. Dooito offers an intuitive interface to streamline your task management process."
    },
    {
      question: "Are there different plans available for Dooito?",
      answer: "Yes, Dooito provides various plans to cater to different user needs. Whether you're an individual user or part of a team, you can choose a plan that suits your requirements. Our plans come with different features to enhance your task management experience."
    },
    {
      question: "Can I collaborate with others on tasks using Dooito?",
      answer: "Absolutely! Dooito is designed for collaboration. You can easily invite team members, assign tasks, and work together seamlessly. Our collaboration features ensure that everyone stays on the same page, promoting effective teamwork and project management."
    },
    {
      question: "How does Dooito handle task deadlines and reminders?",
      answer: "Dooito understands the importance of deadlines. You can set due dates for your tasks, and our system will send you reminders to help you stay on track. This ensures that you never miss an important deadline and can manage your time efficiently."
    },
    {
      question: "Is it possible to customize task categories on Dooito?",
      answer: "Certainly! Dooito allows you to customize task categories to align with your specific workflow. Whether you prefer to organize tasks by project, priority, or any other criteria, our platform provides flexibility to adapt to your unique task management needs."
    },
    {
      question: "How secure is Dooito for managing sensitive tasks?",
      answer: "Security is our top priority at Dooito. We implement robust security measures to protect your data. All communications are encrypted, and we follow industry best practices to ensure the confidentiality and integrity of your tasks and information."
    }
  ];
  
  

  export {navLinks, mainLinks, additionalLinks, FAQ }
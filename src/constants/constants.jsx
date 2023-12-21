import {
    CalendarPlus,
    ListTodo,
    ClipboardEdit,
    CircleUserRound,
    Home
  } from "lucide-react";
import Profile from "../pages/Home/Dashboard/Components/Profile";
import AddTask from "../pages/Home/Dashboard/Components/AddTask";
import Tasks from "../pages/Home/Dashboard/Components/Tasks";
import UpdateTask from "../pages/Home/Dashboard/Components/UpdateTask";


const navLinks = [
    {
      id: "how_it_works",
      title: "How it works",
    },
    {
      id: "pricing",
      title: "Pricing",
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
    {
      id: 4,
      label: "Update Task",
      icon: <ClipboardEdit />,
      component: <UpdateTask></UpdateTask>
    },
  ];
  
  const additionalLinks = [
    {
      id: 5,
      label: "Home",
      icon: <Home />,
    },
  ];
  

  export {navLinks, mainLinks, additionalLinks }
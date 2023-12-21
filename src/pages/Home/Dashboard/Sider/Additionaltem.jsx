import { useNavigate } from "react-router-dom";


function Additionaltem({ link, expanded, active}) {

  const navigate = useNavigate();

  const handleClick = () => {

    navigate('/');
  };

    return (
     
      <li
        className={`flex p-3 my-1 items-center gap-3
        text-gray-100 font-medium rounded-md cursor-pointer
        hover:bg-accent-light transition-all
        ${expanded ? "w-56" : "w-auto"}
        ${active === link?.id ? "bg-indigo-600 hover:bg-indigo-600" : ""}
      `}
        onClick={handleClick}
      >
        {link?.icon}
        <span className={`${expanded ? "block" : "hidden"} transition-all`}>
          {link?.label}
        </span>
      </li>
     
    );
  }
  
  export default Additionaltem;
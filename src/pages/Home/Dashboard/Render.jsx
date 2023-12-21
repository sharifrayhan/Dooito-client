import { mainLinks } from "../../../constants/constants";

const Render = ({ activeLink }) => {
  const selectedComponent = mainLinks.find((link) => link.id === activeLink)?.component;

  return <>{selectedComponent}</>;
};

export default Render;


// const Render = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Render;

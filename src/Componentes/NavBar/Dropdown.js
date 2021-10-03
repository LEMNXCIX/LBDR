import React, { useState } from 'react';
import { MenuCategorias } from './menuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown =({item})=> {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
 
  return (
    <>
      <ul
    
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        { MenuCategorias.map((item, index) => {
          return (
            <li key={index}>
              <Link
               
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;




// import React, { useState } from "react";

// import "./Dropdown.css";
// import { Link, NavLink } from "react-router-dom";

// function Dropdown({ item }) {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const [dropdown, setDropdown] = useState(false);

//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };
//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   return (
//     <>
//       <NavLink to={item.url} className={item.cName} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//         {item.title}
//       </NavLink>

//       <ul
//         onClick={handleClick}
//         className={click ? "dropdown-menu clicked" : "dropdown-menu"}
//       >
//         {item.Nav.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className={item.cName}
//                 to={item.path}
//                 onClick={() => setClick(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Dropdown;

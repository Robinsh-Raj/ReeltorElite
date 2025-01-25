// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

// const PropertyCard = ({ property }) => {
//   const { image, name, price, location, beds, baths, sqft } = property;

//   return (
//     <motion.div 
//       className="property-card"
//       whileHover={{ scale: 1.03 }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="property-image">
//         <img src={image} alt={name} />
//       </div>
//       <div className="property-info">
//         <h3>{name}</h3>
//         <p className="price">${price.toLocaleString()}</p>
//         <p className="location">{location}</p>
//         <div className="property-details">
//           <span><FaBed /> {beds} beds</span>
//           <span><FaBath /> {baths} baths</span>
//           <span><FaRuler /> {sqft} sqft</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PropertyCard;

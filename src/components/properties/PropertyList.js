// import React, { useState } from 'react';
// import PropertyCard from './PropertyCard';
// import PropertySearch from './PropertySearch';
// import { motion } from 'framer-motion';
// import propertyData from '../../data/propertyData';

// const PropertyList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const filteredProperties = propertyData.filter(property =>
//     property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     property.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="property-section">
//       <PropertySearch 
//         searchTerm={searchTerm} 
//         setSearchTerm={setSearchTerm} 
//       />
//       <motion.div 
//         className="property-grid"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ staggerChildren: 0.1 }}
//       >
//         {currentProperties.map(property => (
//           <PropertyCard 
//             key={property.id} 
//             property={property} 
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default PropertyList;

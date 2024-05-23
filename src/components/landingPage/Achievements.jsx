// import React from 'react'
// import Carousel from './Carousel';
// import Footer from '../../layouts/Footer';
// const Achievements = () => {
//     return (
//         <div className='bg-[#222626] pb-12 pt-3'>
//             {/* our achievement div */}
//             <div className=''>
//                 <h2 className='text-center text-orange-600 text-2xl pt-12 font-semibold'>Our Achievements From Clients</h2>
//                 <p className='text-center text-gray-400 pt-6 text-lg'>Optimized productivity, streamlined tasks and improved 
//                     efficiency with our innovative<br /> time tracker software.</p>
//             </div>
//             {/* testimonial card div 1 */}
//             <div className='bg-[#222626] pb-12 mt-16 flex gap-x-12 items-center justify-center'>
//                 <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#2C3131] p-2">
//                     <img className="pl-8 pt-2" src="assets/cyberify 10 1.png" alt="cyberify" />
//                     <div className="px-6 py-4">
//                         <p className="text-gray-400 text-base">
//                             “Game-changer! This time tracker software transformed how we work,
//                             enhancing accuracy and project management. A must-have for businesses.”
//                         </p>
//                         <div className='pt-5 flex items-start justify-start'>
//                             <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//                             <span className='text-white pl-4 py-2 font-bold'>Saad Naeem</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#2C3131] p-2">
//                     <img className="pl-8 pt-2" src="assets/cyberify 10 1.png" alt="cyberify" />
//                     <div className="px-6 py-4">
//                         <p className="text-gray-400 text-base">
//                             “Game-changer! This time tracker software transformed how we work,
//                             enhancing accuracy and project management. A must-have for businesses.”
//                         </p>
//                         <div className='pt-5 flex items-start justify-start'>
//                             <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//                             <span className='text-white pl-4 py-2 font-bold'>Ashar maqbool</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#2C3131] p-2">
//                     <img className="pl-8 pt-2" src="assets/cyberify 10 1.png" alt="cyberify" />
//                     <div className="px-6 py-4">
//                         <p className="text-gray-400 text-base">
//                             “Game-changer! This time tracker software transformed how we work,
//                             enhancing accuracy and project management. A must-have for businesses.”
//                         </p>
//                         <div className='pt-5 flex items-start justify-start'>
//                             <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//                             <span className='text-white pl-4 py-2 font-bold'>Saad Ali</span>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div>
//              <Carousel />
//             </div>
//             {/* <div className='pt-8'><Footer /></div> */}
//         </div>
//     )
// }

// export default Achievements;
import React from 'react';
import Carousel from './Carousel';

const items = [
  // Assuming each item is an object with id, image, title, and description
  { id: 1, image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', title: 'Item 1', description: 'Description for item 1' },
  { id: 2, image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', title: 'Item 2', description: 'Description for item 2' },
  { id: 3, image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', title: 'Item 3', description: 'Description for item 3' },
  { id: 4, image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', title: 'Item 4', description: 'Description for item 4' },
  { id: 5, image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', title: 'Item 5', description: 'Description for item 5' }
];

const App = () => {
  return (
    <div className="bg-pinkbackground pb-12 pt-3  container mx-auto px-0">
      <div className=''>
        <h2 className='text-center text-orange-600 text-2xl pt-12 font-semibold'>Our Achievements From Clients</h2>
        <p className='text-center text-gray-400 pt-6 text-lg p-5'>Optimized productivity, streamlined tasks and improved
          efficiency with our innovative<br /> time tracker software.</p>
      </div>
      <Carousel items={items} />
    </div>
  );
};

export default App;

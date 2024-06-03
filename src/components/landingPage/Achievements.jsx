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

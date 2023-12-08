import React from 'react';

import Cards from '../../components/Cards'
import { data } from '../../utils/data'

const HomePage = () => {
  return (
    <div>
    <section className='max-w-6xl mx-auto py-16 flex flex-row flex-wrap gap-8'>
      {
        data.map((item) => (
          <Cards info={item} key={item.imdbID} />
        ))
      }
    </section>
  </div>
  );
}

export default HomePage;

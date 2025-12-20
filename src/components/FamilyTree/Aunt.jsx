import React from 'react';
import Cousins from './Cousins';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
             <Cousins name='Tom tom'></Cousins>  
              <Cousins name='Jo jooo'></Cousins>
            </section>
        </div>
    );
};

export default Aunt;
import React from 'react';
import Dad from './FamilyTree/Dad';
import Uncle from './FamilyTree/Uncle';
import Aunt from './FamilyTree/Aunt';

const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
            <Dad></Dad>
             <Uncle></Uncle>
             <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;
import React from 'react';
import Dad from './FamilyTree/Dad';
import Uncle from './FamilyTree/Uncle';
import Aunt from './FamilyTree/Aunt';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
            <Dad asset={asset}></Dad>
             <Uncle></Uncle>
             <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;
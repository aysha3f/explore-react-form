import React from 'react';
import Special from './FamilyTree/Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;
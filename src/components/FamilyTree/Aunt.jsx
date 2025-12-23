import React, { use } from 'react';
import Cousins from './Cousins';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
   
   const [money, setMoney] = use(MoneyContext);
   const handleAddMoney = () =>{
    setMoney(money + 5000);
   }
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
             <Cousins asset={asset} name='Tom Tom'></Cousins>  
              <Cousins name='Jo jooo'></Cousins>
              <button onClick={handleAddMoney}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;
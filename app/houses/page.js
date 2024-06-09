import HouseItem from '../../components/house-item.jsx';

function HousesList({houses}){
  return(
    <ul>
      {houses.map((house)=>{
        return(
        <li key={house.id} >
            <HouseItem house={house}/>
        </li>
      )})
      }
    </ul> 
  )  
};

export default HousesList;
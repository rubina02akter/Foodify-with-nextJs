import Data from '../../../../public/data.json'

export default function page({params}) {

  const {id:category} = params;
  console.log(params);
  const filterData = Data.filter((card)=>card.category === category)

  return (
    <div>
     <h2>{filterData.length}</h2>
    </div>
  )
}

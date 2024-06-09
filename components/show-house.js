
export default function ShowHouse({ house }) {

   
    return (
        <dialog open>
            <div className='outter-div'>
                <div className='w-2/3 sm:w-full rounded shadow-lg m-4'>
  
                        <div className='d-flex justify-content-between p-4'>
                            <h2 className='house-name'>House: <strong>{house.name}</strong></h2>
                            <h5>Animal: <strong>{house.animal}</strong></h5>
                            <h5 >Founder: <strong>{house.founder}</strong></h5>
                        </div>
                    
                    <form method="dialog" action="" className="p-4 hover:text-sky-700">
                        <button>Close</button>
                    </form>
                </div>
                
            </div>
            
        </dialog>
    )


}
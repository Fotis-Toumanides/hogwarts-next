'use-client'

import ShowHouse from '@/components/show-house';
import SearchHouse from './search-house';
export default function MainHeader({houses}){
    return(
        <div className='p-4'>
            <SearchHouse houses={houses} />
        </div>
        
    )
}
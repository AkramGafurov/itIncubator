import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css';


// types
export type AffairPriorityType = 'low'|'middle'|'high'; // need to fix any
export type AffairType = {
    _id: number, 
    name: string,
    priority: FilterType
};
// need to fix any
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


// pure helper functions функция фильтрации

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'low'){
        return affairs.filter(item=>item.priority === 'low')
    }else if(filter === 'middle'){
        return affairs.filter(item=>item.priority === 'middle')
    }else if (filter === 'high'){
        return affairs.filter(item=>item.priority === 'high')
    } else {
        return affairs
    }// need to fix
}

//функция удаления пунктов
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter((item)=>item._id !== _id)
}



function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <section className={s.affairSection}>
            <h2>Homeworks 2</h2> 
            
            <div className={s.affairContent}>
                <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />     
            </div>
                     
        </section>
    )
}

export default HW2

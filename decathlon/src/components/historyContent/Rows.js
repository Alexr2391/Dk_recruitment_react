import React from 'react'
import {
    container,
    left_item,
    right_item,
    central_item
} from './Rows.module.scss'

const Row = ({child1, date, child2}) => {
    return (
        <div className={container}>
            <div className={left_item}>
                <img alt='img' src={child1} />
            </div>
            <div className={central_item}>
                <h2>
                    <div>
                        {date.substring(0,2)}
                    </div>
                    <div>
                        {date.substring(2,4)}
                    </div>
                </h2>
            </div>
            <div className={right_item}>
                {child2}
            </div>
        </div>
    )
}


export default Row

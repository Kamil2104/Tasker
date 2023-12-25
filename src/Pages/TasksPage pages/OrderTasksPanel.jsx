import React from 'react'
import { useRef } from 'react'

const OrderTasksPanel = ( {handleActualOrderBy, handleActualOrderType} ) => {
    
    // useRef's
    const selectOrderByRef = useRef("Name")
    const selectOrderTypeRef = useRef("ASC")

    // function's
    const handleButtonSetOrder = () => {
        handleActualOrderBy(selectOrderByRef.current.value)
        handleActualOrderType(selectOrderTypeRef.current.value)
    }

    return (
        <div className='orderTasksPanel'>
            <h1> Order by: </h1>
            <div className='orderTasksPanelCriterias'>
                <select
                    name="selectOrderBy"
                    id="selectOrderBy">
                    <option> Name </option>
                    <option> Description </option>
                    <option> Date </option>
                    <option> Priority </option>
                </select>
                <select
                    name="selectOrderType"
                    id="selectOrderType">
                    <option> ASC </option>
                    <option> DESC </option>
                </select>
                <button id="setOrder" onClick={handleButtonSetOrder}> Set </button>
            </div>
        </div>
    )
}

export default OrderTasksPanel
import React from 'react'
import { useRef } from 'react'

const OrderTasksPanel = ({ handleActualOrderBy, handleActualOrderType }) => {

    // useRef's
    const selectOrderByRef = useRef("Name")
    const selectOrderTypeRef = useRef("ASC")

    const handleButtonSetOrder = () => {
        const orderBy = selectOrderByRef.current.value;
        const orderType = selectOrderTypeRef.current.value;
        
        handleActualOrderBy(orderBy, orderType);
        handleActualOrderType(orderType);
    }

    return (
        <div className='orderTasksPanel'>
            <h1> Order by: </h1>
            <div className='orderTasksPanelCriterias'>
                <select
                    name="selectOrderBy"
                    id="selectOrderBy"
                    ref={selectOrderByRef}>
                    <option> Name </option>
                    <option> Description </option>
                    <option> Date </option>
                    <option> Priority </option>
                </select>
                <select
                    name="selectOrderType"
                    id="selectOrderType"
                    ref={selectOrderTypeRef}>
                    <option> ASC </option>
                    <option> DESC </option>
                </select>
                <button id="setOrder" onClick={handleButtonSetOrder}> Set </button>
            </div>
        </div>
    )
}

export default OrderTasksPanel
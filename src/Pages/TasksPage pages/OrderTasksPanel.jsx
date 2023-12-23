import React from 'react'

const OrderTasksPanel = ({ login }) => {
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
                <button id="setOrder"> Set </button>
            </div>
        </div>
    )
}

export default OrderTasksPanel
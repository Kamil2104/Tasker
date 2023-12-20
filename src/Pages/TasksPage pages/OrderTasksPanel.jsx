import React from 'react'

const OrderTasksPanel = () => {
    return (
        <div className='orderTasksPanel'>
            <h1> Order by: </h1> <br />
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
    )
}

export default OrderTasksPanel
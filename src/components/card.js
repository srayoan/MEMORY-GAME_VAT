import { hasSelectionSupport } from "@testing-library/user-event/dist/utils"

// components/Card.js
function Card({item, id, handleClick}){
    // geting classes based on status of the card
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Card




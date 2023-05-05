import React from 'react'
import '../styles/Card-small.css'

function CardSmall({growth, pageViews, icon}) {
    return (
        <div className="card-small">
        <p className="card-small-views">page views</p>
        <p className="card-small-icon">
            <img src={icon} alt='Icon'/>
        </p>
        <p className="card-small-number">{pageViews}</p>
        <p className="card-small-percentage">
            <span>
                <img src="images/up.png" alt='up.png'/>
                {growth}%
            </span>
         
        </p>
    </div>
    )
}

export default CardSmall
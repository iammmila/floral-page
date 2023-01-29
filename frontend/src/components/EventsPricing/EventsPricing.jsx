import React from 'react'
import "./style.scss"
function EventsPricing() {
    return (
        <section className='events'>
            <div className="container">
                <div className="events_pricing">
                    <span>Devoted to wonderful beauty
                    </span>
                    <h5>Events Pricing
                    </h5>
                    <ul className='cards'>
                        <li className='card'>
                            <h6>
                                <span>$16</span>per table
                            </h6>
                            <h3> Birthday Events

                            </h3>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per
                            </p>
                            <button>shop now</button>
                        </li>
                        <li className='card'>
                            <h6>
                                <span>$31</span>per table
                            </h6>
                            <h3> Wedding  Events

                            </h3>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per
                            </p>
                            <button>shop now</button>
                        </li>
                        <li className='card'>
                            <h6>
                                <span>$52</span>per table
                            </h6>
                            <h3> Party  Events
                            </h3>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per
                            </p>
                            <button>shop now</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default EventsPricing
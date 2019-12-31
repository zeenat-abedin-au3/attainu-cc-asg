import React from 'react'
import Timer from 'react-compound-timer'
const TimerDeal = () => {
    return (
        <div className="row">
            <div className="col-md-4 m-auto py-3">
                <h3>Deal of The Day</h3>
                <Timer
                    initialTime={5000000}
                    direction="backward"
                >
                    {() => (
                        <React.Fragment>
                            <Timer.Hours /> hours {" "}
                            <Timer.Minutes /> minutes {" "}
                            <Timer.Seconds /> seconds {" "}
                        </React.Fragment>
                    )}
                </Timer>
            </div>
        </div >
    )
}

export default TimerDeal

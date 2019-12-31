import React from 'react'
import Timer from 'react-compound-timer'
const TimerDeal = () => {
    return (
        <div className="row">
            <div className="col-md-4 m-auto py-3">
                <h3 className="text-center">Deal of The Day</h3>
                <Timer
                    initialTime={3600000}
                    direction="backward"
                >
                    {() => (
                        <React.Fragment>
                            <div className="text-center">
                                <Timer.Hours /> <strong>Hours</strong> {" "}
                                <Timer.Minutes /> <strong>Minutes</strong> {" "}
                                <Timer.Seconds /> <strong>Seconds</strong> {" "}
                            </div>

                        </React.Fragment>
                    )}
                </Timer>
            </div>
        </div >
    )
}

export default TimerDeal

import React from 'react';
import "./styles.css";

const BookingViews = {
    selectDoctor: 0,
    scheduleAppointment: 1,
    summary: 2
};

const angel = require('../../assets/img/angel.JPG');
const rachel = require('../../assets/img/rachel.JPG');
const gene = require('../../assets/img/gene.JPG');

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: BookingViews.selectDoctor,
        };
    }

    render() {
        const { currentView } = this.state;
        let view;
        switch (currentView) {
            case BookingViews.selectDoctor: 
                view = (
                    <div className="selectDoctorContainer">
                        <div className="previous">{`<`}</div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${angel})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor">Select Doctor ></div>
                            </div>
                        </div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${rachel})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor">Select Doctor ></div>
                            </div>
                        </div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${gene})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor">Select Doctor ></div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case BookingViews.scheduleAppointment: break;
            case BookingViews.summary: break;
        }
        return (
            <div>
                {view}
            </div>
        );
    }
}

export default Booking;
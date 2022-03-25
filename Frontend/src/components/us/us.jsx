import React from 'react'
import './us.css'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

function Us() {
    return (
        <div className="general">
            <h2 className="tittleh2us">Why people choose us?</h2>

            <div className="centerdiv">
            <div className="item">
                <RecordVoiceOverOutlinedIcon className="icon"/>
                <h3>Guidance</h3>
                <p>Expert insight and travel knowledge.</p>
            </div>
            <div className="item">
                <AssignmentTurnedInOutlinedIcon className="icon"/>
                <h3>Value</h3>
                <p>Irresistible rates, offers and benefits.</p>
            </div>
            <div className="item">
                <SpaOutlinedIcon className="icon"/>
                <h3>Peace of Mind</h3>
                <p>Book with confidence.</p>
            </div>
            <div className="item">
                <ConnectWithoutContactOutlinedIcon className="icon"/>
                <h3>Service</h3>
                <p>Beside you every step of the way.</p>
            </div>
            </div>


        </div>
    )
}


export default Us

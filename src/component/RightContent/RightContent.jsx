import React from 'react';
import CustomerReview from "../CustomerReview/CustomerReview";
import RecentActivities from "../RecentActivities/RecentActivities";
import "./RightContent.css";

const RightContent = () => {
    return (
        <div className="RightContent">
            <div>
                <h3 style={{ color: '#fff' }}>Recent Activities</h3>
                <RecentActivities />
            </div>
            <div>
                <h3 style={{ color: '#fff' }}>Customer Review</h3>
                <CustomerReview />
            </div>
        </div>
    )
}

export default RightContent
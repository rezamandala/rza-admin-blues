import React from "react";
import "./RecentActivities.css";
import { RecentActivitiesData } from "../../data/data";

const RecentActivities = () => {
    return (
        <div className="RecentActivities">
            {RecentActivitiesData.map((update) => {
                return (
                    <div className="update">
                        <img src={update.img} alt="profile" />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{update.name}</span>
                                <span> {update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecentActivities;

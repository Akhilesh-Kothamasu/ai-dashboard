import React from "react";
import Header from "../Header/Header";
import LineChartComponent from "../LineChart/LineChart";
import BarChartComponent from "../BarChart/BarChart";
import LineChartComponent2 from "../LineChart2/LineChart2";
import Footer from "../Footer/Footer";
import './DashBoard.css';

const DashBoard = () => {
    return (
        <div>
            <Header />
            <div>
                <h3 className="heading"> User Satisfaction By Ratings</h3>
                <LineChartComponent />
            </div>
            <div>
                <h3 className="heading">User Statistics By Platform</h3>
                <BarChartComponent />
            </div>
            <div>
                <h3 className="heading">User Statistics By Country</h3>
                <LineChartComponent2 />
            </div>
            <Footer />
        </div>
    )
}

export default DashBoard;
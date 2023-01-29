import ReactApexChart from "react-apexcharts";
import "./Chart.css"
import {FiChevronRight} from "react-icons/fi"
import Form from 'react-bootstrap/Form';

const ChartShow = () => {

    const chartData = {
        chart: {
            
            id: "apexchart-example",
            // type:"line"
        },
        xaxis: {
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        },
        yaxis: {
            title: {
                text: 'Amount of Car Rented'
            },
        },
        colors: ['#586B90', '#586B90'],
        // fill: {
        //     type: "gradient",
        //     gradient: {
        //     shade: "light",
        //     type: "horizontal",
        //     shadeIntensity: 0.5,
        //     gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        //     inverseColors: true,
        //     opacityFrom: 1,
        //     opacityTo: 1,
        //     stops: [0, 50, 100]
        //     // colorStops: []
        //     }
        // },
        legend: {
            // position: '',
            width: 200
            // position: 'top',
        },
        series: [
            {
                name: "Total Rent",
                type: "bar",
                data: [80, 50, 10, 20, 92, 85, 62, 5, 25, 115, 95, 100, 97, 32, 119, 80, 50, 10, 20, 92, 85, 62, 5, 25, 115, 95, 100, 97, 32, 119]
            },
            // {
            // name: "Time Traveled",
            // type: "line",
            // data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16]
            // }
        ]
    };
    return(
        <div>
            <div className="dashboard-breadcrumb">
                <div>
                    <p className="dashboard-breadcrumb-p">Dashboard</p>
                </div>
                <div>
                    <FiChevronRight size={16}/>
                </div>
                <div>
                    <p className="dashboard-breadcrumb-p-active">Dashboard</p>
                </div>
            </div>
            <div>
                <div className="dashboard-chart-title-bg">
                    <div className="dashboard-chart-title-icon"></div>
                    <div className="dashboard-chart-title">
                        <p>Rented Car Data Visualization</p>
                    </div>
                </div>
                <div className="dashboard-mounth-bg">
                    <div className="dashboard-mounth-title">
                        <p>Month</p>
                    </div>
                    <div className="dashboard-mounth-select-bg">
                        <div className="dashboard-mounth-select">
                            <Form.Group>
                                <Form.Select >
                                    <option>Januari - 2022</option>
                                    <option>Februari - 2022</option>
                                    <option>Maret - 2022</option>
                                    <option>April - 2022</option>
                                    <option>Mei - 2022</option>
                                    <option>Juni - 2022</option>
                                    <option>Juli - 2022</option>
                                    <option>Agustus - 2022</option>
                                    <option>September - 2022</option>
                                    <option>Oktober - 2022</option>
                                    <option>November - 2022</option>
                                    <option>Desember - 2022</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="dashboard-mounth-btn">
                            <button>Go</button>
                        </div>
                    </div>
                </div>
                <ReactApexChart
                    options={chartData} 
                    series={chartData.series} 
                    width="96%"
                    height="376px"
                />
            </div>
        </div>
    )
}

export default ChartShow;
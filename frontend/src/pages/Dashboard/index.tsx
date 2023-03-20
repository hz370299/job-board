import BarChart from "components/Charts/BarChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/request';
import { SalePage } from "types/SalePage";
import Chart from 'react-apexcharts';
import { Link } from "react-router-dom"
import { setDate } from "date-fns";
type Page = []
type SeriesData = {
    name: string,
    data: number[]
}
type ChartData = {
    labels: {
        categories: string[]
    },
    series: SeriesData[]
}
const Dashboard = () => {
    const [page, setPage] = useState<Page>([])
    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: ['Year1', 'Year2', 'Year3', 'Year4', 'Year5']
        },
        series: [
            {
                name: "JOBTime",
                data: [10, 20, 30, 40, 50]
            },
        ]
    })
    useEffect(() => {
        axios({
            method: 'post',
            url: `${BASE_URL}/page`,
        })
            .then((response) => {
                setPage(response.data)
            })
    }, [])
    const deleteItem = (index:any) =>{
        console.log(index)
        let newData=page
        newData.splice(index,1);
        console.log(page);
        setPage([...newData])
        // setDate(page)
    }

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Jobs Dashboard</h1>
                <Link to="/select">
                    <button className="button">+ADD JOB</button>
                </Link>

                {
                    // @ts-ignore
                    page.map((item: any, index) => {
                        // @ts-ignore
                        return (
                            <div className="row px-3" key={index}>
                                <div className="col-md-6">
                                    <h5 className="text-center text-secondary">Jobs</h5>
                                    <button className="button" onClick={() => {deleteItem(index)}}>delete</button>
                                    <p>{item.occTiltle}</p>
                                    <p>{item.amean}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="text-center text-secondary"></h5>
                                    <Chart
                                        options={{ ...options, xaxis: chartData.labels }}
                                        series={[
                                            {
                                                name: "JOBTime",
                                                data: [Number(item.apct10), Number(item.apct10 * (1 + 0.3)), Number(item.apct10 * (1 + 0.6)), Number(item.apct10 * (1 + 0.9)), Number(item.apct10 * (1 + 1.2))]
                                            }
                                        ]}
                                        type="line"
                                        height="240"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className="py-3">
                    <h2 className="text-primary">All Jobs</h2>
                </div> */}

                {/* <DataTable /> */}
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
import BarChart from "components/Charts/BarChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/request';
import { SalePage } from "types/SalePage";
import Chart from 'react-apexcharts';
import qs from 'qs';
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
            categories: ['Year1','Year2','Year3','Year4','Year5']
        },
        series: [
            {
                name: "JOBTime",
                data: [10,20,30,40,50]
            },
        ]
    })
    useEffect(() => {
        axios({
            method: 'post',
            url: `${BASE_URL}/page`,
            data:qs.stringify({
                occTiltle: "Chief"
            })
        })
            .then((response) => {
                setPage(response.data)
            })
    }, [])
    const selectName = () => {
        axios({
            method: 'post',
            url: `${BASE_URL}/ListByName`,
            data:qs.stringify({
                occTiltle: "Chief"
            })
        })
            .then((response) => {
               
            })
       
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
                <h1 className="text-primary py-3">Enter the work you want to view</h1>
                <input></input>
                <button className="button1" onClick={() => {selectName()}}>+ADD JOB</button>

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
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/SaleSuccess';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/request';

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

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })
    useEffect(() => {
        const data = [
            { "sellerName": "Logan", "visited": 1495, "deals": 684 },
            { "sellerName": "Anakin", "visited": 2396, "deals": 1028 }, 
            { "sellerName": "BarryAllen", "visited": 3385, "deals": 2164 },
            { "sellerName": "Kal-El", "visited": 3040, "deals": 1958 }, 
            { "sellerName": "Padme", "visited": 3426, "deals": 2369 }] as SaleSuccess[]
        const myLabels = data.map(x => x.sellerName)
        const mySeries = data.map(x =>x.deals)

        setChartData({
            labels: {
                categories: myLabels
            },
            series: [
                {
                    name: "% Success",
                    data: mySeries
                }
            ]
        })
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="line"
            height="240"
        />
    );
}

export default BarChart;
import BarChart from 'components/Charts/BarChart'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from 'utils/request'
import { SalePage } from 'types/SalePage'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { setDate } from 'date-fns'

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
const options = {
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
}

const Dashboard = () => {
//    const [page, setPage] = useState<Page>([])
  const dispatch = useDispatch()
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: ['Year1', 'Year2', 'Year3', 'Year4', 'Year5'],
    },
    series: [
      {
        name: 'Starting Salary',
        data: [10, 20, 30, 40, 50],
      },
    ],
  })
  const dashboardList = useSelector((state: any) => state.dashboard.dashboardList)
  const deleteItem = (index: any) => {
    //confirm alert
    if (window.confirm('Are you sure you want to delete this job?')) {
      dispatch({ type: 'DELETE_ITEM', payload: index })
      alert('Job deleted successfully')
    }
  }
  const handleMove = (index: any, isUp: any) => {
    dispatch({ type: 'MOVE_ITEM', payload: { index, isUp } })
  }
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-primary py-3">Jobs Dashboard
          {/*  float right*/}
          <Link to="/select" className="btn btn-primary float-right">
            Add Job
          </Link>
        </h1>

        {
          // @ts-ignore
          dashboardList.map((item: any, index) => {
            // @ts-ignore
            return (
              <div className="card mb-3" key={item.userId}>
                <div className="row no-gutters">
                  <div className={'col-12 text-right'}>
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => deleteItem(index)}
                    >Delete
                    </button>
                    {
                      index !== 0
                      &&
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleMove(index, true)}
                      >Up</button>
                    }
                    {
                      index !== dashboardList.length - 1
                      &&
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleMove(index, false)}
                      >Down</button>
                    }
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">{item.occTitle}</h5>
                      <p className="card-text"> Average annual
                        salary: {item.amean}</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <Chart
                      options={{ ...options, xaxis: chartData.labels }}
                      series={[
                        {
                          name: 'Starting Salary',
                          data: [
                            parseFloat((item.apct10 * 1).toFixed(2)),
                            parseFloat((item.apct10 * 1.03).toFixed(2)),
                            parseFloat((item.apct10 * 1.03 * 1.03).toFixed(2)),
                            parseFloat((item.apct10 * 1.03 * 1.03 * 1.03).toFixed(2)),
                            parseFloat((item.apct10 * 1.03 * 1.03 * 1.03 * 1.03).toFixed(2)),
                            
                          ],
                        },
                      ]}
                      type="line"
                    />
                  </div>
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
  )
}

export default Dashboard

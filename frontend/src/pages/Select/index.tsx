import BarChart from 'components/Charts/BarChart'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from 'utils/request'
import { SalePage } from 'types/SalePage'
import Chart from 'react-apexcharts'
import qs from 'qs'

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
      categories: ['Year1', 'Year2', 'Year3', 'Year4', 'Year5'],
    },
    series: [
      {
        name: 'Year',
        data: [10, 20, 30, 40, 50],
      },
    ],
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const totalList = useSelector((state: any) => state.total.totalList)
  const dashboardList = useSelector((state: any) => state.dashboard.dashboardList)
  const selectName = () => {
    if(!inputRef.current?.value){
      alert('Please enter a job')
      return
    }
    if (
      dashboardList.find((item: any) => item.occTitle === inputRef.current?.value)
    ) {
      alert('This job is already in the dashboard')
      return
    }
    //@ts-ignore
    const item = totalList.find(item => { return item.occTitle === inputRef.current?.value })
    if (!item) {
      alert('This job does not exist')
      return
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
    //@ts-ignore
    inputRef.current.value = ''
    alert('Job added successfully');
    window.location.href = '/dashboard';

  }

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Enter the work you want to view</h1>
        <div className="input-group">
          <input type="text" className="form-control" ref={inputRef} />
          <div className="input-group-btn">
            <button
              className={'btn btn-primary'}
              onClick={() => selectName()}
            >+ ADD JOB
            </button>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Dashboard

import { useEffect, useState } from 'react'
import Routes from 'Routes'
import { Provider } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { BASE_URL } from 'utils/request'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //axios get response data and replace payload
    axios({
        method: 'get',
        url: `${BASE_URL}/ListAll`,
    })
        .then((response) => {
          dispatch({
            type: 'FETCH_DATA', payload: response.data
          })
        })


  }, [])

  return (
    Routes()
  )
}
export default App

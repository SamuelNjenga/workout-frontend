import React, { useEffect, useState, useCallback } from 'react'

import { Grid } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { LoopCircleLoading } from 'react-loadingg'
import { useParams } from 'react-router-dom'

import { getSessionsBasedOnServiceName } from '../../services/APIUtils'

import './CategoryList.css'
import TrainingSession from '../trainingSession/TrainingSession'

const CategoryList = () => {
  const { name } = useParams()
  const [count, setCount] = useState(null)
  const [page, setPage] = useState(0)
  const [sessions, setSessions] = useState({})
  const [isLoading, setLoading] = useState(true)

  const fetchProducts = useCallback(async () => {
    const res = await getSessionsBasedOnServiceName(name, page)
    const data = res.data
    const curr = data?.currentPage
    const num = data?.totalPages
    setCount(num)
    setPage(curr)
    setSessions(data?.serviceTypes[0]?.TrainingSessions)
    setLoading(false)
  }, [page, name])

  const handleChange = (event, value) => {
    setPage(value - 1)
  }

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    window.scroll(0, 0)
  }, [page])

  return (
    <>
      <div className='heading'>
        <br />
        <header className='product-heading'>Our {name}</header>
      </div>
      <div className='content-container'>
        {isLoading ? (
          <LoopCircleLoading />
        ) : (
          <div style={{ padding: 20 }}>
            <Grid container spacing={1}>
              {sessions?.map(session => (
                <Grid key={session.id} item xs={12} sm={6} lg={3} xl={3}>
                  <TrainingSession session={session} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
      <div style={{ margin: 'auto', width: '60%' }}>
        <Pagination
          count={count}
          page={page + 1}
          color='primary'
          variant='outlined'
          shape='rounded'
          showLastButton
          showFirstButton
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default CategoryList

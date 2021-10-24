import Grid from '@material-ui/core/Grid'
import { Pagination } from '@material-ui/lab'
import { LoopCircleLoading } from 'react-loadingg'
import { useSessions } from '../../contexts/TrainingSessionContext'
import TrainingSession from './TrainingSession'
import './TrainingSessions.css'

const TrainingSessionsList = () => {
  const { sessions, isLoading, count, page, setPage } = useSessions()

  const handleChange = (event, value) => {
    setPage(value - 1)
  }

  //   useEffect(() => {
  //   window.scrollTo(0, 100)
  // }, [handleChange])

  return (
    <>
      <div className='equipment-container'>
        <div className='content-container'>
          {isLoading ? (
            <LoopCircleLoading />
          ) : (
            <Grid container spacing={2} style={{ padding: 24 }}>
              {sessions.map(session => (
                <Grid key={session.id} item xs={12} sm={6} lg={3} xl={4}>
                  <TrainingSession session={session} />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
        <div style={{ margin: 'auto', width: '60%' }}>
          <Pagination
            count={count}
            page={page + 1}
            color='primary'
            variant='outlined'
            shape='rounded'
            onChange={handleChange}
          />
        </div>
        <hr />
      </div>
    </>
  )
}

export default TrainingSessionsList

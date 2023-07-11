import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveFilter } from '../redux/selectors/filterSelector.js'
import { setFilter } from '../redux/actionCreators/filterCreators.js'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectActiveFilter)
  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter('all'))}
        className="btn btn-filter"
        style={{
          color:
            filter === 'all' ? 'var(--bright-blue' : 'var(--dark-grayish-blue)',
          cursor: 'pointer',
        }}
      >
        All
      </button>

      <button
        onClick={() => dispatch(setFilter('active'))}
        className="btn btn-filter"
        style={{
          color:
            filter === 'active'
              ? 'var(--bright-blue'
              : 'var(--dark-grayish-blue)',
          cursor: 'pointer',
        }}
      >
        Active
      </button>

      <button
        onClick={() => dispatch(setFilter('completed'))}
        className="btn btn-filter"
        style={{
          color:
            filter === 'completed'
              ? 'var(--bright-blue'
              : 'var(--dark-grayish-blue)',
          cursor: 'pointer',
        }}
      >
        Completed
      </button>
    </div>
  )
}

export default Filter

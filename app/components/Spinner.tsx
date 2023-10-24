import React from 'react'

const Spinner = () => {
  return (
    <div className='inline-block h-8 w-8 animate-spin rounded-full border-collapse' role='status'>
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden'>
            Loading...
        </span>
    </div>
  )
}

export default Spinner
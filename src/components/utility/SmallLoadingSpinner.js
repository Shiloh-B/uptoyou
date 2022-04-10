import React from 'react';

const SmallLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center ml-3">
      <div className="w-5 h-5 border-4 border-t-transparent border-white border-solid rounded-full animate-spin" role="status">
      </div>
    </div>
  )
}

export default SmallLoadingSpinner
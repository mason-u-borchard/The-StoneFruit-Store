import React, { Component } from 'react';

const AdditionalInfo = function(props) {
  return (
    <div className ='add-info'>
      <div className='add-info-title'> ADDITIONAL INFORMATION</div>
      <div className='currentVersion'><div className='title'>Current Version</div> 9.78</div>
      <div className='size'> <div className='title'>Size</div> 68218MB</div>
      <div className='installs'><div className='title'>Installs</div> 77,973</div>
      <div className='updatedAt'><div className='title'>Updated </div> Sat Aug 17 2019 11:46:07 GMT-0700 (Pacific Daylight Time)</div>
    </div>
  )
}

export default AdditionalInfo;
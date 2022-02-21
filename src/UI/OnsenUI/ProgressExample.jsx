import React from 'react'
import {ProgressBar, ProgressCircular} from 'react-onsenui'

export default function ProgressExample() {
  return (
    <div>
      <ProgressBar indeterminate></ProgressBar>
      <ProgressCircular value="30" secondaryValue="50"></ProgressCircular>
      <ProgressCircular modifier='material' value="30" secondaryValue="50"></ProgressCircular>
      <ProgressCircular value="30" indeterminate></ProgressCircular>
    </div>
  )
}

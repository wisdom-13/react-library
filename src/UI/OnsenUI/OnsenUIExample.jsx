import React from 'react'
import ButtonExample from './ButtonExample'
import ActionSheetExample from './ActionSheetExample'
import {Page, ProgressBar} from 'react-onsenui'
import CheckBoxExample from './CheckBoxExample'
import FabExample from './FabExample'
import ListExample from './ListExample'
import ProgressExample from './ProgressExample'
import AlertExample from './AlertExample'

export default function OnsenUIExample() {
  return (
    <Page>
      <h2>Alert</h2>
      <AlertExample />
      <h2>Progress</h2>
      <ProgressExample />
      <h2>List</h2>
      <ListExample />
      <h2>Fab</h2>
      <FabExample />
      <h2>CheckBox</h2>
      <CheckBoxExample />
      <h2>ActionSheet</h2>
      <ActionSheetExample />
      <h2>Button</h2>
      <ButtonExample />
    </Page>
  )
}

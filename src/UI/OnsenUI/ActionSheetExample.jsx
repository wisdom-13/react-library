import React, { useState } from 'react'
import {Button, ActionSheet, ActionSheetButton} from 'react-onsenui'

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);
  const handelClick = () => {
    setOpen(true);
  }

  return (
    <div>
      <Button onClick={handelClick}>Open</Button>
      <ActionSheet isOpen={open} title="actionsheet">
        <ActionSheetButton>
          Label 1
        </ActionSheetButton>
        <ActionSheetButton modifier="destructive">
          Label 2
        </ActionSheetButton>
        <ActionSheetButton>
          Cancel
        </ActionSheetButton>
        
      </ActionSheet>
    </div>
  )
}

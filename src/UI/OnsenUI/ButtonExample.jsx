import React from 'react'
import {Button} from 'react-onsenui'

export default function () {
  const handleClick = () => {
    alert("click")
  }
  
  return (
    <div>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} disabled={true}>
        Tap Me
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="outline">
        Tap Me
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="light">
        light
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="quiet">
        quiet
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="cta">
        cta
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large">
        large
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large--quiet">
        large--quiet
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large--cta">
        large--cta
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material">
        material
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material--flat">
      material--flat
      </Button>
    </div>
  )
}

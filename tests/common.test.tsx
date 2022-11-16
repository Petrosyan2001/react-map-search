import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { ReactMapSearch } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <ReactMapSearch id='suggest'>
        <input id='suggest' />
      </ReactMapSearch>,
    )
  })
})

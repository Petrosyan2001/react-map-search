## Installation:

```bash
npm install react-map-search --save-dev
```

or

```bash
yarn add -D react-map-search
```

## Usage :

Add `ReactMapSearch` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactMapSearch } from 'react-map-search'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
       <ReactMapSearch id='suggest'>
        <input id='suggest' />
      </ReactMapSearch>
    </React.StrictMode>,
)

```
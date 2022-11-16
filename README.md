## Demo
![](https://drive.google.com/file/d/1himRP8gi9hck2SyxowV7iUKyglHwW4cX/view?usp=sharing)
## Installation:

```bash
npm install react-map-input-search --save-dev
```

or

```bash
yarn add -D react-map-input-search
```

## Usage :

Add `ReactMapSearch` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactMapSearch } from 'react-map-input-search'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
       <ReactMapSearch id='suggest'>
        <input id='suggest' />
      </ReactMapSearch>
    </React.StrictMode>,
)

```
import React, { Suspense } from 'react'
import './App.css'

import './i18n'

import FunctionalComponent from './components/functional-component'
import NormalComponent from './components/normal-component'
import Options from './components/options'
import Module1 from './components/module1'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Suspense fallback="loading">
          <Options />
        </Suspense>

        <div className="row">
          <Suspense fallback="loading">
            <FunctionalComponent />
          </Suspense>

          <Suspense fallback="loading">
            <NormalComponent />
          </Suspense>

          <Module1 />
        </div>

      </header>
    </div>
  )
}

export default App

import React, { Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ModuleContent = () => {
  const { t } = useTranslation('module1')

  return <>
    <p><span className="small">{ "const {t} = useTranslation('module1')" }</span></p>

    <p>
      <span className="small">t('option'):</span>
      { t('option') }
    </p>

    <hr/>

    <p>
      <span className="small">t('hello'):</span>
      { t('hello') }
    </p>
    <p>
      <span className="small">t('translation:hello'):</span>
      { t('translation:hello') }
    </p>
  </>
}

const Module1 = () => {
  const [moduleVisible, setModuleVisible] = useState(false)

  return (
    <div className='component-box'>
      <p className="title">module1 (load namespace async):</p>

      <button onClick={()=> setModuleVisible(!moduleVisible)}>toggle module1</button>
      {moduleVisible && <>
        <Suspense fallback="loading">
          <ModuleContent />
        </Suspense>
      </>}
    </div>
  )
}
export default Module1

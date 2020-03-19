import React from 'react'
import { useTranslation } from 'react-i18next'

const Options = () => {
  const {i18n} = useTranslation()

  return (
    <div className='component-box'>
      <p className="title">i18n:</p>
      <p>active lang: {i18n.language}</p>
      <div>
        <button onClick={()=> i18n.changeLanguage('xx')}>xx</button>
        <button onClick={()=> i18n.changeLanguage('en')}>en</button>
        <button onClick={()=> i18n.changeLanguage('es')}>es</button>
        <button onClick={()=> i18n.changeLanguage('ch')}>ch</button>
      </div>
    </div>
  )
}

export default Options

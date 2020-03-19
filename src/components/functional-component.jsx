import React from 'react'
import { useTranslation } from 'react-i18next'

const FunctionalComponent = () => {
  const { t } = useTranslation()

  return (
    <div className='component-box'>
      <p className="title">functional component:</p>

      <p>
        <span className='small'>t('hello'):</span>
        {t('hello')}
      </p>
      <p>
        <span className="small">t('missing text'):</span>
        {t('missing text')}
      </p>
    </div>
  )
}

export default FunctionalComponent

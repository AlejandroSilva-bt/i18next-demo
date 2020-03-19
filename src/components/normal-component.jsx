import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

class NormalComponent extends Component {
  render() {
    const { t } = this.props

    return (
      <div className='component-box'>
        <p className="title">normal component:</p>

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
}


export default withTranslation()(NormalComponent)

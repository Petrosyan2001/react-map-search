import React, { Fragment } from 'react'
import { YMaps, Map, YMapsApi } from 'react-yandex-maps'
import { IProps } from './types'
import { GlobalStyle, MainBlock } from './style'

const ReactMapSearch: React.FC<IProps> = ({ id, lang, children, hoverColor, onChange, style }: IProps) => {
  return (
    <Fragment>
      <GlobalStyle style={style} hoverColor={hoverColor} />
      <MainBlock>
        {children}
        <YMaps query={{ mode: 'release', lang: lang }}>
          <Map
            onLoad={(ymaps: YMapsApi) => {
              const suggestView = new ymaps.SuggestView(id)
              suggestView.events.add('select', (e: any) => {
                if (onChange) {
                  onChange(e?.get('item')?.value)
                }
              })
            }}
            width={0}
            height={0}
            state={{
              center: [0, 0],
              zoom: 10,
              visable: false,
            }}
            defaultState={{ center: [0, 0], zoom: 0 }}
            modules={['SuggestView']}
          />
        </YMaps>
      </MainBlock>
    </Fragment>
  )
}

ReactMapSearch.defaultProps = {
  lang: 'en_US',
}

export default ReactMapSearch

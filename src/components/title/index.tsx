import React, { FC, ComponentProps } from 'react'
import cn from 'classnames'
import './index.less'

export interface TitleProps extends ComponentProps<'div'> {
  title?: string
  subTitle?: string
  size?: 'default' | 'small' | 'middle' | 'large'
  extra?: React.ReactNode
  number?: number
  simple?: boolean
}

export default (props: TitleProps) => {
  const {
    title = '暂无标题',
    subTitle,
    size = 'default',
    extra,
    number,
    simple,
    ...rest
  } = props || {}

  return (
    <div
      className={cn('tntd-title', size, { 'has-number': number }, { 'is-simple': simple })}
      {...rest}
    >
      <div className="tntd-title-text">
        {number && <i className="count">{number <= 9 ? `0${number}` : number}</i>}
        <h3>{title}</h3>
        <span>{subTitle}</span>
      </div>
      {extra && <div className="tntd-title-extra">{extra}</div>}
    </div>
  )
}

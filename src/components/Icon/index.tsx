import React from 'react'

type Props = {
  icon: string
  solid?: boolean
  isRpg?: boolean
}

const Icon = (props: Props) => {
  return props.isRpg ? <i className={`ra ra-lg ${props.icon}`} /> : (
    <span className={props.solid ? 'material-icons' : 'material-icons-outlined'}>
      {props.icon}
    </span>
  )
}

export default React.memo(Icon)

import React from 'react'

type Props = {
  icon: string
  solid?: boolean
}

const Icon = ({ icon, solid }: Props) => {
  return (
    <span className={solid ? 'material-icons' : 'material-icons-outlined'}>
      {icon}
    </span>
  )
}

export default React.memo(Icon)

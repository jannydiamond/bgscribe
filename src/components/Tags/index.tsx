import React from 'react'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'
import Tag from './__styled__/Tag'

type Props = {
  tags: string[]
  variant?: 'default' | 'primary'
}

const Tags = (props: Props) => {
  return (
    <List>
      {props.tags.map((tag, index) => (
        <ListItem key={`${tag}-${index}`}>
          <Tag variant={props.variant ? props.variant : 'default'}>{tag}</Tag>
        </ListItem>
      ))}
    </List>
  )
}

export default React.memo(Tags)

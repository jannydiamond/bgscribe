import React from 'react'
import { useSelector } from 'react-redux'
import { selectSessionTemplatesList } from 'Redux/SessionTemplates'
import List from './__styled__/List'
import P from 'components/__styled__/P'
import ListItem from './__styled__/ListItem'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import IconWrapper from './__styled__/IconWrapper'
import Icon from 'components/Icon'
import Link from './__styled__/Link'

const SessionTemplateList = () => {
  const sessionTemplates = useSelector(selectSessionTemplatesList)

  return (
    <>
      {sessionTemplates.length > 0 ? (
        <List>
          {sessionTemplates.map((template) => (
            <ListItem key={template.id}>
              <Link to={`/templates/${template.id}`} key={template.id}>
                <ContentWrapper>
                  <Title>{template.name}</Title>
                </ContentWrapper>
                <IconWrapper>
                  <Icon icon="chevron_right" />
                </IconWrapper>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <P>No templates have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(SessionTemplateList)

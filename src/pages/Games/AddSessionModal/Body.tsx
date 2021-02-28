import React from 'react'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'

const Body = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event)
    console.log('submitted')
  }

  return (
    <ModalBodyWrapper>
      <form id="addSession" onSubmit={(event: any) => handleSubmit(event)}>
        <fieldset>
          <label htmlFor="sessionName">
            <span>Name</span>
            <input id="sessionName" />
          </label>
        </fieldset>
      </form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

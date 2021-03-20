import styled from 'styled-components/macro'

import Wrapper from 'components/AchievementAvatar/__styled__/Wrapper'

const AchievementPreview = styled('div')`
  width: 200px;
  height: 200px;
  display: block;
  margin: 32px 0;
  position: relative;

  @media all and (min-width: 480px) {
    width: 300px;
    height: 300px;
  }

  ${Wrapper} {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  .ra {
    font-size: 3rem;
  }
`

export default AchievementPreview

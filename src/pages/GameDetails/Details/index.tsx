import React from 'react'
import { useSelector } from 'react-redux'

import { selectGamesById } from 'Redux/Games'

import LastPlayed from 'pages/GameDetails/LastPlayed'
import SessionCount from 'pages/GameDetails/SessionCount'

import KeyValueList from 'components/__styled__/KeyValueList'

import Wrapper from './__styled__/Wrapper'
import DetailsWrapper from './__styled__/DetailsWrapper'
import ImageWrapper from './__styled__/ImageWrapper'
import Image from './__styled__/Image'

type Props = {
  gameId: string
}

const Details = (props: Props) => {
  const gamesById = useSelector(selectGamesById)
  const game = gamesById[props.gameId]

  return (
    <Wrapper noImage={!game.image}>
      {game.image && (
        <ImageWrapper>
          <Image src={game.image} alt="" />
        </ImageWrapper>
      )}
      <DetailsWrapper noImage={!game.image}>
        <KeyValueList>
          <SessionCount gameId={props.gameId} />
          <LastPlayed gameId={props.gameId} />
        </KeyValueList>
      </DetailsWrapper>
    </Wrapper>
  )
}

export default React.memo(Details)

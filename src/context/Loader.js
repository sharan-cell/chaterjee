import React from 'react'
import styled from 'styled-components'
import {MutatingDots} from 'react-loader-spinner'
function Loader() {
  return (
    <Container>
  
    <MutatingDots ariaLabel="loading-indicator" className='loader'/>
    </Container>
  )
}

export default Loader
const Container = styled.div`

min-height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;                                               

`;
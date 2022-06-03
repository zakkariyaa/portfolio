import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterSection>
      <div className='container'>
        <p>&copy; 2022 &ndash; Zakarie Yaris. All Rights Reserved</p>
        <p>Terms and conditions</p>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  margin-top: 18rem;
  margin-bottom: 8rem;
  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.3rem;
      color: #0C1E50;
      font-weight: 600;
    }

    p + p {
      color: #2d4cc8;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 5rem;
    .container {
      width: 88%;
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
    padding: 2rem;
    .container {
      max-width: 95%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      p {
        font-size: 0.7rem;
        font-weight: normal;
      }
    }
  }
`

export default Footer
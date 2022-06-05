import React from 'react'
import styled from 'styled-components'

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import ContactImg from '../assets/contact2.png'

const Contact = () => {
  return (
    <ContactSection>
      <p className='border-top' id='contact'></p>
      <small>Get In</small>
      <h2>Contact</h2>

      <div className="contact__container">
        <aside className="contact__aside">

          <div className="aside__image">
            <img src={ContactImg} alt="person looking at the stars" />
          </div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            doloribus voluptatibus inventore repudiandae praesentium nobis
            expedita excepturi, fugit, provident qui aperiam dignissimos
          </p>
          <ul class="contact__details">
            <li>
              <i><AiOutlineMail /></i>
              <h5>info@zakariya.com</h5>
            </li>
            <li>
              <i><GoLocation /></i>
              <h5>London, England</h5>
            </li>
          </ul>
          <ul class='contact__socials'>
            <li><a href="https://www.linkedin.com/in/zakarie-yaris/"><AiFillLinkedin /></a></li>
            <li><a href="https://github.com/zakkariyaa"><AiFillGithub /></a></li>
            <li><a href="https://twitter.com/zakaariyee"><AiOutlineTwitter /></a></li>
            <li><a href="https://www.instagram.com/?hl=en"><AiOutlineInstagram /></a></li>
          </ul>
        </aside>

        <form class="contact__form" action="https://formsubmit.co/info@zakariya.me" method="POST">
          <div class="contact__form-inputs">
            <input type="text" name="name" placeholder="Your name:" required />
            <input type="email" name="email" placeholder="your@yourcompany.com" required />
            <input type="number" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Message" rows="7" required></textarea>
          </div>

          <div class="buttons">
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  margin-top: 7rem;

  .border-top {
    text-align: center;
    width: 60%;
    border: 1px solid gray;
    margin: 1rem auto;
    margin-bottom: 3rem;
  }
  small {
      display: block;
      text-align: center;
      color: #03045e;
      font-size: 1.2rem;
    }
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #457b9d;
  }
  .contact__container {
    box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.3);
    width: 80%;
    margin: 7rem auto 0;
    background: #edf6f9;
    padding: 4rem;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 4rem;
    height: 32rem;
    border-radius: 1rem;
    .contact__aside {
      box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.3);
      background: #edf2f4;
      padding: 3rem;
      border-radius: 1rem;
      position: relative;
      bottom: 10rem;

      .aside__image {
        width: 12rem;
        margin-bottom: 1rem;
        img {
          width: 100%;
        }
      }
      h2 {
        text-align: left;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      .contact__details li {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
      .contact__socials {
        display: flex;
        gap: 0.8rem;
        margin-top: 3rem;
        a {
          background: #424890;
          color: white;
          padding: 0.5rem;
          border-radius: 50%;
          font-size: 1.5rem;
          transition: all 400ms ease;
          :hover {
            background: transparent;
            color: #023047;
            border: 1px solid #023047;
          }
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-right: 4rem;
      input, textarea {
        width: 100%;
        padding: 1rem;
        background: #ffffff;
        border-radius: 0.5rem;
        box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
      }
      .contact__form-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      .buttons {
        button {
          font-size: 1.2rem;
          margin-top: 1rem;
          background: #1d3557;
          color: #bde0fe;
          display: inline-block;
          padding: 0.8rem 1.6rem;
          margin-right: 0.6rem;
          width: fit-content;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 400ms ease;
          border-radius: 0.4rem;
          :hover {
            background: transparent;
            color: #1d3557;
            border-color: #1d3557;
          }
        }

        button + button {
          color: #219ebc;
          background: transparent;
          border: 1px solid #023047;
          :hover {
            background: #1d3557;
            color: #bde0fe;
            border-color: #1d3557;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .contact__container {
      grid-template-columns: 1fr;
      width: 88%;
      margin-top: 2rem;
      .contact__aside {
        display: none;
      }
      form {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .contact__container {
      padding: 1rem;
      height: 70vh;

      form {
        justify-content: space-between;
        gap: 0;
        margin: 0;
        .contact__form-inputs {
          display: flex;
          flex-direction: column;
          gap: 0;
          > * {
            margin-bottom: 2rem;
          }
        }

        .buttons {
          button {
            font-size: 1rem;
            margin-top: 0.5rem;
            padding:  0.6rem 1.2rem;
          }
        }
      }
    }
  }
`

export default Contact
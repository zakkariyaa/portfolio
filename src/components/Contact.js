import React from 'react';
import styled from 'styled-components';

import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import ContactImg from '../assets/contact2.png';

const Contact = ({ isDarkMode }) => {
  return (
    <ContactSection isDarkMode={isDarkMode}>
      <p className="border-top" id="contact"></p>
      <small>Get In</small>
      <h2>Contact</h2>

      <div className="contact__container">
        <aside className="contact__aside">
          <div className="aside__image">
            <img src={ContactImg} alt="person looking at the stars" />
          </div>
          <h2>Let's Talk</h2>
          <p>
            To get in contact for professional work, project collaboration or
            just to say hi, please fill the form or shoot me a quick email and i
            will get back to you as soon as possible.
          </p>
          <ul className="contact__details">
            <li>
              <i>
                <AiOutlineMail />
              </i>
              <h5>info@zakariya.com</h5>
            </li>
            <li>
              <i>
                <GoLocation />
              </i>
              <h5>London, England</h5>
            </li>
          </ul>
          {/* <ul className="contact__socials">
            <li>
              <a href="https://www.linkedin.com/in/zakarie-yaris/">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/zakkariyaa">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/zakaariyee">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=en">
                <AiOutlineInstagram />
              </a>
            </li>
          </ul> */}
        </aside>

        <form
          className="contact__form"
          action="https://formsubmit.co/info@zakariya.me"
          method="POST"
        >
          <div className="contact__form-inputs">
            <input type="text" name="name" placeholder="Your name:" required />
            <input
              type="email"
              name="email"
              placeholder="your@yourcompany.com"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="7"
              required
            ></textarea>
          </div>

          <div className="buttons">
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding-top: 7rem;
  padding-bottom: 3rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1d3557' : '#edf2f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};

  .border-top {
    text-align: center;
    width: 60%;
    border: 0.7px solid #219ebc;
    background: #219ebc;
    margin: 1rem auto 0;
  }
  small {
    margin-top: 4rem;
    display: block;
    text-align: center;
    color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#03045e')};
    font-size: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 1.7rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#edf6f9' : '#457b9d')};
  }
  .contact__container {
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.3);
    width: 80%;
    margin: 10rem auto 0;
    background: ${({ isDarkMode }) => (isDarkMode ? '#172a46' : '#e8f7fa')};
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 4rem;
    height: 32rem;
    border-radius: 1rem;
    .contact__aside {
      box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.3);
      background: ${({ isDarkMode }) => (isDarkMode ? '#283b57' : '#cfdddf')};
      padding: 2rem;
      border-radius: 1rem;
      position: relative;
      bottom: 6rem;

      .aside__image {
        width: 12rem;
        margin-bottom: 1rem;
        img {
          width: 100%;
        }
      }
      h2 {
        font-size: 1.5rem;
        text-align: left;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        margin-bottom: 2rem;
      }
      .contact__details li {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 0;
        font-size: 1.1rem;
        color: ${({ isDarkMode }) => (isDarkMode ? '#2a9d8f' : '#1d3557')};
      }
      /* .contact__socials {
        display: flex;
        gap: 0.8rem;
        margin-top: 3rem;
        a {
          background: #424890;
          color: white;
          padding: 0.4rem;
          border-radius: 100%;
          font-size: 1.5rem;
          transition: all 400ms ease;
          :hover {
            background: transparent;
            color: #023047;
            border: 1px solid #023047;
          }
        }
      } */
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input,
      textarea {
        width: 90%;
        padding: 1rem;
        background: #ffffff;
        border-radius: 0.5rem;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.1);
      }
      .contact__form-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      .buttons {
        button {
          font-size: 1rem;
          margin-top: 1rem;
          background: #2a9d8f;
          border: 1px solid #2a9d8f;
          color: #edf2f4;
          display: inline-block;
          padding: 0.4rem 1rem;
          margin-right: 0.6rem;
          width: fit-content;
          cursor: pointer;
          transition: all 400ms ease;
          border-radius: 0.4rem;
          :hover {
            background: transparent;
            color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
            border-color: #2a9d8f;
          }
        }

        button + button {
          color: #219ebc;
          background: transparent;
          border: 1px solid #2a9d8f;
          :hover {
            background: transparent;
            color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
            border-color: #2a9d8f;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .contact__container {
      height: 30rem;
      margin-top: 5rem;
      grid-template-columns: 1fr;
      width: 88%;
      padding-top: 2rem;
      .contact__aside {
        display: none;
      }
      form {
        margin: 0;
        .buttons button {
          margin-top: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 3rem;

    small {
      margin-top: 1rem;
      font-size: 0.9rem;
    }
    h2 {
      font-size: 1.5rem;
    }

    .contact__container {
      margin-top: 1rem;
      padding: 1rem;
      height: 60vh;

      form {
        justify-content: space-between;

        input,
        textarea {
          width: 100%;
          padding: 0.2rem 0.5rem;
        }
        .contact__form-inputs {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          > * {
            padding-bottom: 2rem;
          }
        }

        .buttons {
          button {
            font-size: 1rem;
            margin-top: 0;
            padding: 0.6rem 1.2rem;
          }
        }
      }
    }
  }
`;

export default Contact;

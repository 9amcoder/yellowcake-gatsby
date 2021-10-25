import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './ContactUS.css'

export const ContactUs = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_zx3r63r',
        'template_d3zzh4o',
        form.current,
        'user_9j9DE40Kp30fTz8EeyiGG'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="form-box">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <br></br>
            <button type="submit" value="Send">
              {/* <input type="submit" value="Send" /> */}
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

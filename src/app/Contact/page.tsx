import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <label htmlFor='name'>Name</label>
        <input type="text"id="name" name="name" required></input>

        <label htmlFor='email'>Email</label>
        <input type="Email"id="email" name="email" required></input>



        <label htmlFor='message'>Message</label>
        <textarea id="message" name="message" rows={8} required></textarea>

<button type='submit'>Send Message

</button>



      </form>
    </div>

  )
}
export default Contact

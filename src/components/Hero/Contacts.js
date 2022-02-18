import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { useForm, ValidationError } from '@formspree/react';
import {Button} from '@material-ui/core';


function Contact() {
    
    const [state, handleSubmit] = useForm("xwkyoqrp");
    if (state.succeeded) {
        return (
            <div className='contact' style={{marginTop:'20px'}}>
               
               <center> <p>Thanks for reaching out to me. I will be contacting you if necessary!</p>
              </center> 
            </div>
        );
    }
    return (
      <Section id='contact'>
         <SectionTitle>Contact Me</SectionTitle>
        <div className='contact' style={{borderRadius: '5px'}}>
            <h1 style={{fontSize:'20px'}}>Type Your Message here</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={{marginTop:'10px'}}>
                    Please Enter Your Email Address:
                </label>
                <input style={{
                  width: '100%',
                  padding: "12px 20px",
                  marginTop:'10px',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box'
                }}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="@example.com"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                 <p style={{marginTop:'10px'}}>Your Message:</p>
                <textarea
                style={{
                  width: '100%',
                  padding: "12px 20px",
                  marginTop:'10px',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box'
                }} 
                    id="message"
                    name="message"
                    placeholder="Please Enter Your Message Here."
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button style={{marginTop:'20px',backgroundColor:'white', fontSize:'16px', width:'100%'}} type="submit" disabled={state.submitting}>
                    Send Your Message
                </Button>
            </form>
        </div>
      </Section>
    );
}

export default Contact;

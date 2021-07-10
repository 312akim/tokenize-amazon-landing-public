import React, { useState } from 'react';
import { MobileButton } from '../../../shared/sharedComponents/Button/ButtonComponent';
import { KEYS } from '../../../shared/variables';
import { StyledFormEmailInput, StyledFormEmailLabel, StyledNewsletterForm, StyledNewsletterFormWrapper, StyledThankYouContainer } from './NewsletterFormComponentStyles';

const NewsletterFormComponent = () => {
    const [formSubmission, setFormSubmission] = useState(false);
    const [email, setEmail] = useState('');
    // Optional Name & Last Name fields for future form inputs
    // const [fName, setFName] = useState('');
    // const [lName, setLName] = useState('');

    if (!formSubmission) {
        return (
            <StyledNewsletterFormWrapper>
                <StyledNewsletterForm target="_blank" action={KEYS.mailchimpFormUrl} method="POST">
                    <input type="hidden" name="u" value={KEYS.mailchimpUKey} />
                    <input type="hidden" name="id" value={KEYS.mailchimpIDKey} />
                    <StyledFormEmailLabel htmlFor='formEmail'>
                        Email 
                        <br />
                        <StyledFormEmailInput 
                                type="email" 
                                name="EMAIL" 
                                id="formEmail"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                autoCapitalize="off" 
                                autoCorrect="off"
                                required
                            /> 
                    </StyledFormEmailLabel>
                    {/* <label htmlFor='formFName'>
                        First Name
                        <input 
                            type="text" 
                            name="FNAME" 
                            id="formFName"
                            value={fName} 
                            onChange={(e) => setFName(e.target.value)} 
                            autoCapitalize="off" 
                            autoCorrect="off"
                        /> 
                    </label>
                    <label htmlFor='formLName'>
                        Last Name
                        <input 
                            type="text" 
                            name="LNAME" 
                            id="formLName"
                            value={lName} 
                            onChange={(e) => setLName(e.target.value)} 
                            autoCapitalize="off" 
                            autoCorrect="off"
                        /> 
                    </label> */}
                    <MobileButton type="submit" name="subscribe" text="Get early access"/>
                    
                    {/* Bot Catching Below */}
                        {/* <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                            <label htmlFor="b_name">Name: </label>
                            <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                            <label htmlFor="b_email">Email: </label>
                            <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                            <label htmlFor="b_comment">Comment: </label>
                            <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                        </div> */}
                    {/* Bot Catching End */}
                </StyledNewsletterForm>
            </StyledNewsletterFormWrapper>
        )} else {
            return (
                <StyledThankYouContainer>Thank you for submitting!</StyledThankYouContainer>
            )
        }
}

export default NewsletterFormComponent;
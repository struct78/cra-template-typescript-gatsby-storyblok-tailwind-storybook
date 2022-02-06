import React, { FC } from 'react'
import SbEditable from 'storyblok-react'
import tw from "twin.macro"
import { ComponentProps } from '../../@types/components'
import { Button } from '../button/button'

export type ContactFormProps = {
  name: string
  redirect_uri: any
}

export const FormContainer = tw.form`
`
export const FormRow = tw.div`
`
export const FormLabel = tw.label`
`
export const FormTextInput = tw.input`
`
export const FormTextArea = tw.textarea`
`
export const FormHoneypot = tw.div`
  hidden
`

export const ContactForm: FC<ComponentProps<ContactFormProps>> = ({ blok }: ComponentProps<ContactFormProps>) => {
  const { _uid, name, redirect_uri } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <FormContainer name={name} method='POST' action={`/${redirect_uri?.cached_url}`} data-netlify='true' data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value={name} />
        <FormHoneypot aria-hidden>
          <FormLabel>Trick or treat *</FormLabel>
          <FormTextInput name='bot-field' />
        </FormHoneypot>
        <FormRow>
          <FormLabel>Your Name *</FormLabel>
          <FormTextInput name='name' required />
        </FormRow>
        <FormRow>
          <FormLabel>Your Email *</FormLabel>
          <FormTextInput name='email' required />
        </FormRow>
        <FormRow>
          <FormLabel>Subject</FormLabel>
          <FormTextInput name='subject' />
        </FormRow>
        <FormRow>
          <FormLabel>Your Message</FormLabel>
          <FormTextArea name='enquiry' />
        </FormRow>
        <FormRow>
          <Button type='submit'>
            Submit
          </Button>
        </FormRow>
      </FormContainer>
    </SbEditable>
  )
}

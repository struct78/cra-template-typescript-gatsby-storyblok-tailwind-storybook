import loadable from '@loadable/component'
import { FC } from 'react'
import { Blok } from 'storyblok-react'
import tw, { styled } from "twin.macro"
import { ContactFormStoryblok } from '../../@types/storyblok'
import { Button } from '../button/button'
const SbEditable = loadable(() => import(/* webpackChunkName: "storyblok-react" */"storyblok-react"))

export type ContactFormProps = {
  name: string
  redirect_uri: any
}

export const FormContainer = tw.form`
  flex flex-col
`
export const FormRow = tw.div`
  flex px-2 py-1 items-center
`
export const FormLabel = tw.label`
  w-1/3
`
export const FormTextInput = tw.input`
  w-2/3 p-1
`
export const FormTextArea = tw.textarea`
  w-2/3 p-1
`
export const FormHoneypot = tw.div`
  hidden
`
export const FormButton = styled(Button)`
  ${tw`w-2/3 ml-1/3`}
`

export const ContactForm: FC<Blok<ContactFormStoryblok>> = ({ blok }: Blok<ContactFormStoryblok>) => {
  const { _uid, name, redirect_uri } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <FormContainer name={name} method='POST' action={`/${redirect_uri?.cached_url}`} data-netlify='true' data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value={name} />
        <FormHoneypot aria-hidden>
          <FormLabel htmlFor="form-bot-field">Trick or treat *</FormLabel>
          <FormTextInput id="form-bot-field" name='bot-field' />
        </FormHoneypot>
        <FormRow>
          <FormLabel htmlFor="form-your-name">Your Name *</FormLabel>
          <FormTextInput id="form-your-name" name='name' required />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="form-your-email">Your Email *</FormLabel>
          <FormTextInput id="form-your-email" name='email' required />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="form-subject">Subject</FormLabel>
          <FormTextInput id="form-subject" name='subject' />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="form-your-message">Your Message</FormLabel>
          <FormTextArea rows={5} id="form-your-message" name='enquiry' />
        </FormRow>
        <FormRow>
          <FormButton type='submit'>
            Submit
          </FormButton>
        </FormRow>
      </FormContainer>
    </SbEditable>
  )
}

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Button } from '../components/button/button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'Hello Storybook')}
    </Button>
  ))

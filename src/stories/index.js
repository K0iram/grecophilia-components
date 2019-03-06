import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'

storiesOf('Button', module)
  .add('default', () => <Button label="Default Button" onClick={action('clicked')}/>)
  .add('small', () => <Button label="Primary Button" variant='primary' size='small' onClick={action('clicked')}/>)
  .add('medium', () => <Button label="Primary Button" variant='primary' size='medium' onClick={action('clicked')}/>)
  .add('large', () => <Button label="Primary Button" variant='primary' size='large' onClick={action('clicked')}/>)
  .add('secondary', () => <Button label="Secondary Button" variant='secondary' size='medium' onClick={action('clicked')}/>)
  .add('outlined', () => <Button label="Outlined Button" variant='outlined' size='medium' onClick={action('clicked')}/>);

storiesOf('Input', module)
  .add('default', () => <Input label='Default Input' onChange={action((e) => {`${e.target.value}`})}/>);

storiesOf('Card', module)
  .add('image card', () => <Card imgSrc='https://placehold.it/500X300' title="Example" description="Example text goes here"/>);
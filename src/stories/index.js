import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'

storiesOf('Button', module)
  .add('default', () => <Button label="Default Button" onClick={action('clicked')}/>)
  .add('small', () => <Button label="Small Button" variant='primary' size='small' onClick={action('clicked')}/>)
  .add('medium', () => <Button label="Medium Button" variant='primary' size='medium' onClick={action('clicked')}/>)
  .add('large', () => <Button label="Large Button" variant='primary' size='large' onClick={action('clicked')}/>)
  .add('secondary', () => <Button label="Secondary Button" variant='secondary' size='medium' onClick={action('clicked')}/>)
  .add('outlined', () => <Button label="Outlined Button" variant='outlined' size='medium' onClick={action('clicked')}/>);

storiesOf('Input', module)
  .add('default', () => <Input label='Default Input' onChange={action((e) => {`${e.target.value}`})}/>);

storiesOf('Card', module)
  .add('image card', () => <Card type="image-card" imgSrc='https://placehold.it/500X300' title="Example" subTitle="Example Subtitle"description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, magnam? Quo beatae perferendis repudiandae, reprehenderit voluptates" btnText="CTA Text Here"/>)
  .add('room card', () => <Card type="room-card" imgSrc='https://placehold.it/500X300' title="Example Room" subTitle="Example Subtitle" sqMeters={50} occupancy={2} price={350}/>);
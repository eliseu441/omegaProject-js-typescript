import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1 row">
      <Link to='https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/' className="cs-center col-2">
        <Icon icon="fa6-brands:linkedin-in" style={{ fontSize: '3rem' }}/>
      </Link>
      <Link to='https://www.instagram.com/eliseu4411/' className="cs-center col-2">
        <Icon icon="fa6-brands:instagram" style={{ fontSize: '3rem' }}/>               
      </Link>
    </Div>
  )
}

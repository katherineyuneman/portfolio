import React from 'react'
import { LeftHeader } from '../styled-components/styleIndex'

const Contact = () => {
  return (
    <LeftHeader>
        <div className='right'>
                <div className='rightContentContainer'>
                    <h2>Where to Find Me</h2>
                    <p>
                    <a target="_blank" href="mailto: kyuneman@gmail.com">Email </a> 
                    | <a target="_blank" href="https://www.linkedin.com/in/katherine-yuneman/">LinkedIn </a> 
                    | <a target="_blank" href="https://github.com/katherineyuneman/">GitHub </a> 
                    | <a target="_blank" href="https://medium.com/@kyuneman/">Medium </a>

                    </p>
                </div>
            </div>

    </LeftHeader>
  )
}

export default Contact

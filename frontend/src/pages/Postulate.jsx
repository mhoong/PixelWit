// Creating a post page
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../utils';
import { randomPorompt } from '../utils';
import { FormField, Loader } from '../components';


const Postulate = () => {
    return (
      <h1 className="text-3xl font-bold underline">
        CreatePost
      </h1>
    )
  }
  

  export default Postulate
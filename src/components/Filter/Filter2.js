import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 15, text: 15 },
  { key: 'ax', value: 30, text: 30 },
  { key: 'al', value: 60, text: 60 },
]

function SelectExample(props) {

  const handleChange = (e) => {
    props.filter(e.target.innerText);
  }
  
  return(
    <Select placeholder='Filter by age' options={countryOptions} onChange={(e) => handleChange(e)} />
  )
}

export default SelectExample;
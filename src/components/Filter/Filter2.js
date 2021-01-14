import React from 'react'
import { Select } from 'semantic-ui-react'

const ageOptions = [
  { key: 'all', value: null, text: 'Afficher tout' },
  { key: 'af', value: 15, text: '15' },
  { key: 'ax', value: 30, text: '30' },
  { key: 'al', value: 60, text: '60' },
]

function SelectExample(props) {

  const handleChange = (e) => {
    const selectedOption = ageOptions.filter(option => option.text === e.target.innerText)[0];
    props.filter(selectedOption.value);
  }
  
  return(
    <Select placeholder='Filter by age' options={ageOptions} onChange={(e) => handleChange(e)} />
  )
}

export default SelectExample;
import React from 'react'
import { Select } from 'semantic-ui-react'

const priceOptions = [
  { key: 'all', value: null, text: 'Afficher tout' },
  { key: 'af', value: 5, text: '5 - 15' },
  { key: 'ax', value: 15, text: '16 - 30' },
  { key: 'al', value: 30, text: '30+' },
]

function SelectExample(props) {

  const handleChange = (e) => {
    const selectedOption = priceOptions.filter(option => option.text === e.target.innerText);
    props.filter(selectedOption.value);
  }
  
  return(
    <Select placeholder='Filter by price' options={priceOptions} onChange={(e) => handleChange(e)} />
  )
}

export default SelectExample;
import React from 'react'
import { Select } from 'semantic-ui-react'

const priceOptions = [
  { key: 'all', value: null, text: 'Afficher tout' },
  { key: '300', value: 300, text: '300' },
  { key: '700', value: 700, text: '700' },
  { key: '1000', value: 1000, text: '1000' },
]

function SelectExample(props) {

  const handleChange = (e) => {
    const selectedOption = priceOptions.filter(option => option.text === e.target.innerText)[0];
    props.filter(selectedOption.value);
  }
  
  return(
    <Select placeholder='Filter par prix' options={priceOptions} onChange={(e) => handleChange(e)} />
  )
}

export default SelectExample;
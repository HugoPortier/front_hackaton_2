import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'Amour', value: 'Amour', text: 'Amour' },
  { key: 'Chance', value: 'Chance', text: 'Chance' },
  { key: 'Magie noire', value: 'Magie noire', text: 'Magie noire' },
]

function SelectExample(props) {

const handleChange = (e) => {
  console.log(e.target.innerText);
  props.filter(e.target.innerText);
}

  return(
    <Select placeholder='Filter by category' options={countryOptions} onChange={(e) => handleChange(e)} />
  )
}

export default SelectExample;
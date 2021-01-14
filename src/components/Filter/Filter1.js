import { Select } from 'semantic-ui-react'

const categoryOptions = [
  { key: 'all', value: null, text: 'Afficher tout' },
  { key: 'Amour', value: 'Amour', text: 'Amour' },
  { key: 'Chance', value: 'Chance', text: 'Chance' },
  { key: 'Magie noire', value: 'Magie noire', text: 'Magie noire' },
]

function SelectExample(props) {

const handleChange = (e) => {
  const selectedOption = categoryOptions.filter(option => option.text === e.target.innerText)[0];
  console.log(e.target.innerText);
  props.filter(selectedOption.value);
}

  return(
    <Select placeholder='Filter by category' options={categoryOptions} onChange={(e) => handleChange(e)} />
  )
}

export default SelectExample;
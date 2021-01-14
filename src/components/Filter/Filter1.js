import React, { useState } from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'Amour', value: 'Amour', text: 'Amour' },
  { key: 'Chance', value: 'Chance', text: 'Chance' },
  { key: 'Magie Noire', value: 'Magie Noire', text: 'Magie Noire' },
]

function SelectExample(props) {
  const [category, setCategory] = useState({
    category: ''
  });

  const filterPotion = () => {
    props.filter(category);
  }

  const handleCategory = (e) => {
    console.log(e.target.innerText);
    setCategory({ ...category, category: e.target.innerText });
    filterPotion(category);
  };
  return(
    <Select placeholder='Filter by category' options={countryOptions} onChange={handleCategory} />
  )
}

export default SelectExample;
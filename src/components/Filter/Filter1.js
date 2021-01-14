import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'Amour', value: 'Amour', text: 'Amour' },
  { key: 'Chance', value: 'Chance', text: 'Chance' },
  { key: 'Magie Noire', value: 'Magie Noire', text: 'Magie Noire' },
]

const SelectExample = () => (
  <Select placeholder='Filter by category' options={countryOptions} />
)

export default SelectExample;
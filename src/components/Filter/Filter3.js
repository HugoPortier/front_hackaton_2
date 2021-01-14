import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: '5 to 15' },
  { key: 'ax', value: 'ax', text: '16 to 30' },
  { key: 'al', value: 'al', text: '30 and more' },
]

const SelectExample = () => (
  <Select placeholder='Filter by price' options={countryOptions} />
)

export default SelectExample;
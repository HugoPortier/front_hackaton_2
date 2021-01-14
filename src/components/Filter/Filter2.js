import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: '<15' },
  { key: 'ax', value: 'ax', text: '15 to 60' },
  { key: 'al', value: 'al', text: '>60' },
]

const SelectExample = () => (
  <Select placeholder='Filter by age' options={countryOptions} />
)

export default SelectExample;
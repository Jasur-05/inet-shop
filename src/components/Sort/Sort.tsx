import React, { useState } from 'react'
import Select from 'react-select';
import filterStore from '../../store/filterStore';

const options = [
  { value: 'price', label: 'По цене' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'title', label: 'По названию' },
];

const Sort = () => {
  const {setSortValue} = filterStore();
  
  const [selectedOption, setSelectedOption] = useState(null);
  const changeOption = (option)=>{
    setSelectedOption(option);
    setSortValue(option.value)
  }
  return (
    <Select
        value={selectedOption}
        onChange={changeOption}
        options={options}
        placeholder='Сортировать по:'
      />
  )
}

export default Sort
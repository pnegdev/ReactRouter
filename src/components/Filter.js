import React, { useState } from 'react';

//Filtre par titre et par note
function Filter({ onFilter }) {
const [titleFilter, setTitleFilter] = useState('');
const [rateFilter, setRateFilter] = useState('');

const handleTitleChange = event => {
setTitleFilter(event.target.value);
onFilter({ title: event.target.value, rate: rateFilter });
};

const handleRateChange = event => {
setRateFilter(event.target.value);
onFilter({ title: titleFilter, rate: event.target.value });
};

return (
<div className="filter">
    <input style={{height:'2rem', borderRadius: '20px 0px 0px 20px'}}
    type="text"
    placeholder="Filtre par titre"
    value={titleFilter}
    onChange={handleTitleChange}
    className="border border-danger px-3"
    />
    <select style={{height:'2rem', borderRadius: '0px 20px 20px 0px'}} value={rateFilter} onChange={handleRateChange} className="border border-danger">
    <option value="">Note</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
</div>
);
}

export default Filter;

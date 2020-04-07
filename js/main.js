let tableData = [
    {title: 'Auto', content: ['BMW', 'Lada', 'Mersedes', 'Jeep']},
    {title: 'Country', content: ['Germany', 'Russia', 'Germany', 'USA']},
    {title: 'City', content: ['Berlin', 'Moscow', 'Chemnitz', 'LA']},
    {title: 'Money', content: ['100', '2000', '50000', '50000']},
    {title: 'Total', content: ['12000', '18000', '90000', '6000']},
];

setTableData = () => {
    const target = document.querySelector('#table');
    target.innerHTML = tableData.map(col => `<div class="col">
            <div class="cell">${col.title}</div>
            ${col.content.map(cell => `<div class="cell">${cell}</div>`).join('')}
            </div>`
    ).join('');
};

setSelectTypeData = () => {
    const target = document.querySelector('#searchBy');
    target.innerHTML = tableData.map(col => `<option>${col.title}</option>`).join('');
};

entryCheck = (data, title, key) => {
    let col = data.find(i => i.title.toLowerCase() === title.toLowerCase());
    let count = 0;
    col.content.forEach(i => {
        if (i.toLowerCase().includes(key.toLowerCase())) {
            count++;
        }
    });
    return count;
};

setTableData();
setSelectTypeData();

const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchBy = document.querySelector('#searchBy').value;
    const key = document.querySelector('#searchKey').value;
    const count = document.querySelector('#count');

    count.textContent = entryCheck(tableData, searchBy, key);
});
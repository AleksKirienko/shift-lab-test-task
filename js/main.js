let tableData = [
    {
        title: 'Auto',
        content: [
            {
                name: 'BMW',
                checkFound: false
            }, {
                name: 'Lada',
                checkFound: false
            }, {
                name: 'Mersedes',
                checkFound: false
            }, {
                name: 'Jeep',
                checkFound: false
            }
        ]
    },
    {
        title: 'Country',
        content: [
            {
                name: 'Germany',
                checkFound: false
            }, {
                name: 'Russia',
                checkFound: false
            }, {
                name: 'Germany',
                checkFound: false
            }, {
                name: 'USA',
                checkFound: false
            }
        ]
    },
    {
        title: 'City',
        content: [
            {
                name: 'Berlin',
                checkFound: false
            }, {
                name: 'Moscow',
                checkFound: false
            }, {
                name: 'Chemnitz',
                checkFound: false
            }, {
                name: 'LA',
                checkFound: false
            }
        ]
    },
    {
        title: 'Money',
        content: [
            {
                name: '100',
                checkFound: false
            }, {
                name: '2000',
                checkFound: false
            }, {
                name: '50000',
                checkFound: false
            }, {
                name: '50000',
                checkFound: false
            }
        ]
    },
    {
        title: 'Total',
        content: [
            {
                name: '12000',
                checkFound: false
            }, {
                name: '18000',
                checkFound: false
            }, {
                name: '90000',
                checkFound: false
            }, {
                name: '6000',
                checkFound: false
            }
        ]
    }
];


setTableData = (t) => {
    const target = document.querySelector('#table');
    target.innerHTML = t.map(col => `<div class="col">
            <div class="cell">${col.title}</div>
            ${col.content.map(cell => `<div class="cell ${cell.checkFound ? "checkfound" : ""}">${cell.name}</div>`).join('')}
            </div>`
    ).join('');
};

setSelectTypeData = () => {
    const target = document.querySelector('#searchBy');
    target.innerHTML = tableData.map(col => `<option>${col.title}</option>`).join('');
};

entryCheck = (data, title, key) => {
    data = JSON.parse(JSON.stringify(data));
    let col = data.find(i => i.title.toLowerCase() === title.toLowerCase());
    let count = 0;
    col.content.forEach(i => {
        if (i.name.toLowerCase().includes(key.toLowerCase())) {
            i.checkFound = true;
            count++;
        }
    });

    setTableData(data);
    return count ? `Found ${count} coincidences` : 'Coincidences not found';
};

setTableData(tableData);
setSelectTypeData();

const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchBy = document.querySelector('#searchBy').value;
    const key = document.querySelector('#searchKey').value;
    const count = document.querySelector('#count');

    count.textContent = entryCheck(tableData, searchBy, key);
});
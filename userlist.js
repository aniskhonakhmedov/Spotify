let successful = Object
let unSuccessful = Object
let taxes = Number
let taxesMax = Object
let taxesMin = Object
let bank = [
    {
        name: 'Apple',
        budget: 1000000,
        tax: 28,
        expensesPerYear: [
            {
                title: 'Salaries',
                total: 125000
            },
            {
                title: 'Communals',
                total: 18000,
            },
            {
                title: 'Rent',
                total: 258000
            }
        ]
    }, {
        name: 'Microsoft',
        budget: 988000,
        tax: 21,
        expensesPerYear: [
            {
                title: 'Salaries',
                total: 148000
            },
            {
                title: 'Communals',
                total: 124000,
            },
            {
                title: 'Rent',
                total: 314000
            }
        ]
    },
    {
        name: 'HP',
        budget: 609000,
        tax: 14,
        expensesPerYear: [
            {
                title: 'Salaries',
                total: 414000
            },
            {
                title: 'Communals',
                total: 19000,
            },
            {
                title: 'Rent',
                total: 114400
            }
        ]
    },
    {
        name: 'Xiomi',
        budget: 889500,
        tax: 17,
        expensesPerYear: [
            {
                title: 'Salaries',
                total: 318000
            },
            {
                title: 'Communals',
                total: 14000,
            },
            {
                title: 'Rent',
                total: 169000
            }
        ]
    },
    {
        name: 'Samsung',
        budget: 889500,
        tax: 12,
        expensesPerYear: [
            {
                title: 'Salaries',
                total: 650400
            },
            {
                title: 'Communals',
                total: 29000,
            },
            {
                title: 'Rent',
                total: 212000
            }
        ]
    },
]

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах
// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания зарабатывает 200.000, но тратит 50.000, значит ее ключ procent = 50
// 3. Сохранить в переменные successful и unsuccessful фирсмы, которые остаются в плюсе или в минусе
// 4. В taxes сохранить общее количество налогов со всех компаний
// 5. В taxesMax и taxesMin сохранить компании, которые платят больше всех/меньше всех налогов
// 6. Добавить в компании ключи totalMoney, в которой должно храниться сколько в итоге остается денег в компании. После вычета налога и всех расходов

const setup = (arr) => {
    let asd = []
    unSuccessful = []
    successful = []
    for (let item of arr) {
        asd.push(item)
        for (let item2 of item.expensesPerYear) {
            item.expensesPerMonth = item2.total + item2.total
        }
        item.procent = item.expensesPerMonth * 100 / item.budget
        item.procent = Math.round(item.procent)
        if (item.tax >= 15) {
            successful.push(item.tax)
            // console.log(3, 'successful', item.name);
        } else {
            unSuccessful.push(item.tax)
            // console.log(3, 'unsuccessful', item.name);
        }

        item.totalMoney =  (item.expensesPerMonth * 12) - item.tax

        console.log(item);
    }
}

setup(bank)
let average = 0

let owners = [
    { name: 'Alex', id: 1 },
    { name: 'Michael', id: 2 },
    { name: 'Barbara', id: 3 },
]

let cars = [
    { ownerName: '', ownerId: 1, name: 'Model S Plaid', hp: 1050 },
    { ownerName: '', ownerId: 3, name: 'M8', hp: 700 },
    { ownerName: '', ownerId: 1, name: 'Lacetti', hp: 150 },
    { ownerName: '', ownerId: 3, name: 'Captiva', hp: 250 },
    { ownerName: '', ownerId: 2, name: 'F8', hp: 850 },
    { ownerName: '', ownerId: 2, name: 'Panamera', hp: 650 },
    { ownerName: '', ownerId: 2, name: 'Santa Fe', hp: 300 },
    { ownerName: '', ownerId: 1, name: 'S600', hp: 500 },
    { ownerName: '', ownerId: 1, name: 'Tico', hp: 50 },
]

let cool_cars = []
let money_cars = []

// Сохранить в average среднюю цену всех автомобилей


// Добавить машинам ключ price = hp * 150
cars.map(item => item.price = item.hp * 150)
cars.map(item => item.average = item.price / cars.length)


// Закинуть в cool_cars hp > 500
cool_cars = cars.filter(item => item.hp > 500)

// Закинуть в money_cars price > 100000
money_cars = cars.filter(item => item.price > 100000)

console.log(cars, cool_cars, money_cars)
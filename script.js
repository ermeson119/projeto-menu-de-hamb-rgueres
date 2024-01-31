const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.showAll')
const buttonMapAll = document.querySelector('.map-showAll')
const sumAll = document.querySelector('.sum-all')
const fillterAll = document.querySelector('.fillter-all')


function formatCurrency(values) {
    const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(values)
    return real
}

function showAll(productsArray) {
    let mylist = ''
    productsArray.forEach(product => {
        mylist += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="value-price"> ${formatCurrency(product.price)}</p>
    </li>
    `
    })

    list.innerHTML = mylist
}

function mapAllItems() {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}



function sumAllItems() {
    const totalValues = menuOptions.reduce((acc, crr) => acc + crr.price, 0)

    list.innerHTML = `
    <li>
        <img src="img/bacon-egg.png">
        <p>O valor total de tudo é ${formatCurrency(totalValues)}</p>
    </li>
    `

}


function FillterAllItems() {
    const fillterValues = menuOptions.filter(values => values.vegan)

    showAll(fillterValues)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
fillterAll.addEventListener('click', FillterAllItems)
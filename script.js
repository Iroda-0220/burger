const a = document.querySelector('.header__timer-extra');
let n = 0

function tez_aylanib_chiqish(n) {
    a.innerHTML = n++;
    if (n <= 80) {
        console.log(n);
        setTimeout(() => {
            tez_aylanib_chiqish(n + 1);
        }, 100);
    } else if (n <= 90) {
        console.log(n);
        setTimeout(() => {
            tez_aylanib_chiqish(n + 1);
        }, 900)
    } else if (n <= 100) {
        console.log(n);
        setTimeout(() => {
            tez_aylanib_chiqish(n + 1);
        }, 1000)

    }
}

tez_aylanib_chiqish(1);



const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,

        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 700,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 100,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
}
let btn = [...document.querySelectorAll('.main__product-btn')];
console.log(btn)

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function () {
        prepare(this)
    })

}

function prepare(item) {
    let parent = item.closest(".main__product")
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    // console.log(parent)
    // console.log(parentId)
    console.log(sym)
    let count = foods[parentId].amount
    console.log(count)
    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    foods[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].kcallSum
}



// <div class="receipt active" style="display: none; opacity: 0;">

//     <div class="receipt__window" style="top: -100%; left: 35%;">
//         <h2 class="receipt__window-title">FOOD100 LVL</h2>

//         <div class="receipt__window-out">Sizning chekingiz

//             GAMBURGER  0x  10000= 0

//             GAMBURGER FRESH 17x  20500= 348500

//             FRESH COMBO 0x  31900= 0


//             Total kcall:  10200 calories
//             Total  price: 348500 sum</div>

//         <button class="receipt__window-btn">Pay</button>
//     </div>
// </div>



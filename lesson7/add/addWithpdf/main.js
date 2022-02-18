let eventDate = new Date();
let hours = eventDate.getHours();
let minutes = eventDate.getMinutes();
let seconds = eventDate.getSeconds();
let todayDate = new Date();
let eventYear = todayDate.getFullYear();
let eventMonth = todayDate.getMonth() + 1;
let eventDay = todayDate.getDate();

function userCard(number) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number,
    }
    return {
        getCardOptions: function () {
            return card;
        },
        putCredits: function (cash1) {
            card.balance = cash1;
            let transaction = {
                operationType: 'Received credits',
                credits: cash1,
                operationTime: `${eventDay}/${eventMonth}/${eventYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.splice(0, 0, transaction);
        },
        takeCredits: function (cash2) {
            if (card.balance >= cash2) {
                card.balance = card.balance - cash2;
                let transaction = {
                    operationType: 'Withdrawal of credits',
                    credits: cash2,
                    operationTime: `${eventDay}/${eventMonth}/${eventYear}, ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.splice(0, 0, transaction);
            } else {
                console.error(card);
            }

        },
        setTransactionLimit: function (cash3) {
            card.transactionLimit = cash3;
            let transaction = {
                operationType: 'Transaction Limit change',
                credits: cash3,
                operationTime: `${eventDay}/${eventMonth}/${eventYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.splice(0, 0, transaction);
        },
        transferCredits: function (credits, cards) {
            cards.getCardOptions().balance += credits;
            credits = credits + (credits * 0.005);
            card.balance -= credits;
        },

    }

}

class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        const card = userCard().getCardOptions();
        this.cards.push(card);
    }

    getCardByKey(number) {
        const card = userCard(number);
        card.getCardOptions().key = number;
        return card;
    }
}

user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

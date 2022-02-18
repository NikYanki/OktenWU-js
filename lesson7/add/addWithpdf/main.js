function userCard() {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: null
    }
    return {
        getCardOptions: function () {
            return card;
        },
        putCredits: function (cash) {
            card.balance += cash;
            let eventDate = new Date();
            let hours = eventDate.getHours();
            let minutes = eventDate.getMinutes();
            let seconds = eventDate.getSeconds();
            let todayDate = new Date();
            let eventYear = todayDate.getFullYear();
            let eventMonth = todayDate.getMonth() + 1;
            let eventDay = todayDate.getDate();
            let transaction = {
                operationType: 'Received credits',
                credits: cash,
                operationTime: `${eventDay}/${eventMonth}/${eventYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.push(transaction);
        },
        takeCredits: function (cash) {
            if (card.balance >= cash) {
                card.balance = card.balance - cash;
                let eventDate = new Date();
                let hours = eventDate.getHours();
                let minutes = eventDate.getMinutes();
                let seconds = eventDate.getSeconds();
                let todayDate = new Date();
                let eventYear = todayDate.getFullYear();
                let eventMonth = todayDate.getMonth() + 1;
                let eventDay = todayDate.getDate();
                let transaction = {
                    operationType: 'Withdrawal of credits',
                    credits: cash,
                    operationTime: `${eventDay}/${eventMonth}/${eventYear}, ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.push(transaction);
            } else {
                console.log("eror");
            }

        },
        setTransactionLimit: function (cash) {
            card.transactionLimit = cash;
            let eventDate = new Date();
            let hours = eventDate.getHours();
            let minutes = eventDate.getMinutes();
            let seconds = eventDate.getSeconds();
            let todayDate = new Date();
            let eventYear = todayDate.getFullYear();
            let eventMonth = todayDate.getMonth() + 1;
            let eventDay = todayDate.getDate();
            let transaction = {
                operationType: 'Transaction Limit change',
                credits: cash,
                operationTime: `${eventDay}/${eventMonth}/${eventYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.push(transaction);
        },
        transferCredits: function (credits, cards) {
            if (card.balance >= credits + (credits * 0.005)) {
                cards.getCardOptions().balance += credits;
                credits = credits + (credits * 0.005);
                card.balance -= credits;
            }
        }

    }

}

class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let card = userCard().getCardOptions();
        this.cards.push(card);
    }

    getCardByKey(number) {
        let card = userCard(number);
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

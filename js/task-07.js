/**
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для
 * работы с балансом и историей транзакций.
 */
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {};
    transaction.id = this.transactions.length + 1;
    transaction.amount = amount;
    transaction.type = type;

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
    console.log(
      `Ваш депозит пополнен на сумму ${amount} USD! Текущий балланс ${this.balance} USD.`,
    );
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log(
        `Недостаточно средств для снятия! Сумма снятия ${amount} USD, Ваш текущий балланс ${this.balance} USD.`,
      );
    } else {
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
      console.log(
        `Операция снятия проведена успешна, сумма снятия ${amount} USD! Остаток после операции ${this.balance} USD.`,
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Ваш текущий балланс ${this.balance} USD`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(150);
account.deposit(1000);
account.withdraw(500);
account.withdraw(400);

console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(4));

console.log(
  `Withdrawals:  ${account.getTransactionTotal(Transaction.WITHDRAW)} USD.`,
);
console.log(
  `Deposits: ${account.getTransactionTotal(Transaction.DEPOSIT)} USD.`,
);

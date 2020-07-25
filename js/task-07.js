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
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
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
    console.log(`Ваш депозит пополнен! Текущий балланс ${this.balance} USD.`);
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
        `Недостаточно средств для снятия! Сумма снятия ${amount} USD, Ваш текущий балланс ${this.balance} USD.`
      );
    } else {
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
      console.log(
        `Операция снятия проведена успешна! Ваш остаток после операции ${this.balance} USD.`
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.ballance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
account.createTransaction(20, { DEPOSIT: "deposit" });
account.createTransaction(30, { WITHDRAW: "withdraw" });
account.createTransaction(310, { WITHDRAW: "withdraw" });
// account.createTransaction(20, { DEPOSIT: "deposit" });
account.deposit(30);
account.deposit(30);
// account.deposit(30);
account.withdraw(40);
account.withdraw(40);

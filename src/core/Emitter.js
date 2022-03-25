export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // dispatch, fire, trigger
  // Уведомляем слушателей, если они есть
  // table.emit('table:select', {a: 1})
  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false;
    }

    this.listeners[eventName].forEach((listener) => listener(...args));
    return true;
  }

  // on, listen
  // Подписываемся на уведомление
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);

    return () => {
      this.listeners[eventName] =
        this.listeners[eventName].filter((listener) => listener !== fn);
    };
  }
}

// Example
// const emitter = new Emitter();
// const unsub = emitter.subscribe('someevent', (data) => console.log('Sub: ', data));
// emitter.emit('someevent', 42);
//
// setTimeout(() => {
//   emitter.emit('someevent', 'After 2 seconds');
// }, 2000);
//
// setTimeout(() => {
//   unsub();
// }, 3000);
//
// setTimeout(() => {
//   emitter.emit('someevent', 'After 4 seconds');
// }, 4000);

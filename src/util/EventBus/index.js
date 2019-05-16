class EventBus {
    constructor () {
      this.events = {}
    }
  
    registerEvent (eventName, callback) {
      if (typeof (callback) !== 'function') {
        return
      }
      if (this.events[eventName]) {
        this.events[eventName].push(callback)
      } else {
        this.events[eventName] = [callback]
      }
    }
  
    unsubscribe (eventName) {
      if (this.events[eventName]) {
        this.events[eventName] = []
      }
    }
  
    dispatchEvent (eventName, params) {

      if (this.events[eventName]) {
        this.events[eventName].forEach(callback => {
          try {
            callback(params)
          } catch (e) {
          }
        })
      }
    }
  }
  
  const eventBus = new EventBus()
  
  export default eventBus
  
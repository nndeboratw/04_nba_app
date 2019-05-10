import { newsCallback, errorCallback } from './promiseCallback'
import { getAllNewsPromise } from './promiseFactory'

class NewsService {
  constructor () {
    this.news = {}
    this.load = {}
    this.playload = {}
    this.errorCallback = errorCallback
  }

  async getAllNews () {
    this.load.currentPromiseFunction = getAllNewsPromise
    this.load.currentCallback = newsCallback
    this.resolveNewsPromise()
  }


  resetService () {
    this.load.currentPromiseFunction = {}
    this.load.currentCallback = {}
  }

  resolveNewsPromise () {
    this.load.activePromise = this.load.currentPromiseFunction(this.playload)
    let vm = this
    if (this.load.currentCallback instanceof Function) {
      this.load.activePromise
        .then(response => vm.load.currentCallback(response, vm))
        .catch(e => {
          vm.load.exception = e
          vm.errorCallback(e, vm)
        })
    } else {
      this.load.error = 'callback function not properly setup'
    }
  }
}

const newsServiceInstance = new NewsService()
const newsLoadedEvent = 'newsLoadedEvent'
const newsErrorEvent = 'newsErrorEvent'

export default newsServiceInstance

export {
    newsLoadedEvent,
    newsErrorEvent
}

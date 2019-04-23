// import request from '../../util/Request'
import eventBus from '../../util/EventBus'
// import Axios from 'axios';
import Axios from 'axios'


class NewsService {
  constructor () {
    this.news = {}
    this.load = {}
  }

  async getAllNews () {
    this.load.currentPromiseFunction = this.getAllNewsPromise
    this.load.currentCallback = this.indexCallback
    this.resolveNewsPromise()
  }

  async getNewsShow (id) {
    this.load.id = id
    this.load.currentPromiseFunction = this.getNewsShowPromise
    this.load.currentCallback = this.showCallback
    this.resolveNewsPromise()
  }

  getAllNewsPromise () {
    return Axios.get('/articles')
  }

  resetService () {
    this.load.currentPromiseFunction = {}
    this.load.currentCallback = {}
  }

  resolveNewsPromise () {
    this.load.activePromise = this.load.currentPromiseFunction()
    let vm = this
    if (this.load.currentCallback instanceof Function) {
      this.load.activePromise.then(response => vm.load.currentCallback(response, vm)).catch(e => {
        this.load.exception = e
      })
    } else {
      this.load.error = 'callback function not properly setup'
    }
  }

  indexCallback (response, vm) {
    vm.news.list = response
    eventBus.dispatchEvent(newsAllLoadedEvent, vm.news.list)
  }

  showCallback (response, vm) {
    vm.news.show = response
    eventBus.dispatchEvent(newsShowLoadedEvent, vm.news.show)
  }
}

const newsServiceInstance = new NewsService()
const newsAllLoadedEvent = 'newsAllLoadedEvent'
const newsShowLoadedEvent = 'newsShowLoadedEvent'
const newsPostLoadedEvent = 'newsPostLoadedEvent'
const newsDeleteLoadedEvent = 'newsDeleteLoadedEvent'
const newsPatchLoadedEvent = 'newsPatchLoadedEvent'

export default newsServiceInstance

export {
  newsAllLoadedEvent,
  newsShowLoadedEvent,
  newsPostLoadedEvent,
  newsDeleteLoadedEvent,
  newsPatchLoadedEvent
}

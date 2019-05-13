import eventBus from '../../util/EventBus'
import { newsLoadedEvent, newsErrorEvent } from '..'

const newsCallback = (response, vm) => {
  vm.news.list = response
  eventBus.dispatchEvent(newsLoadedEvent, vm.news.list)
}

const errorCallback = (error) => {
  eventBus.dispatchEvent(newsErrorEvent, error)
}

export {
  newsCallback,
  errorCallback
}

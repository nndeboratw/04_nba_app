import eventBus from '../../util/EventBus'
import { newsLoadedEvent, newsErrorEvent } from '..'

const newsCallback = (response, vm) => {
  // console.log("Response")
  // console.log(response)
  // console.log("vm")
  // console.log(vm)
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

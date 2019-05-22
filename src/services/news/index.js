import { newsCallback, errorCallback, teamsCallback, videosCallback} from './promiseCallback'
import { getAllNewsPromise, getNewsByIntervalPromise, getTeamsPromise, getVideosByIntervalPromise } from './promiseFactory'


class NewsService {
  constructor () {
    this.errorCallback = errorCallback
  }

  async getHighlightsByInterval(start, end){
    let requestConfiguration = this.configureRequest(getNewsByIntervalPromise,newsCallback, highlightsLoadedEvent, 
      {start: start,
      end: end
    })
    this.resolveNewsPromise(requestConfiguration)
      
  }

  async getNewsByInterval (start,end) {
    let requestConfiguration = this.configureRequest(getNewsByIntervalPromise,newsCallback, newsLoadedEvent, 
      {start: start,
      end: end
    })
    this.resolveNewsPromise(requestConfiguration)
  }

  async getAllNews () {
    let requestConfiguration = this.configureRequest(getAllNewsPromise,newsCallback, newsLoadedEvent, 
      {})
    this.resolveNewsPromise(requestConfiguration)
  }

  async getTeams () {
    let requestConfiguration = this.configureRequest(getTeamsPromise,teamsCallback, teamsLoadedEvent)
    this.resolveNewsPromise(requestConfiguration)
  }

  async getVideosByInterval (start,end) {
    let requestConfiguration = this.configureRequest(getVideosByIntervalPromise,videosCallback, videosLoadedEvent, 
      {start: start,
      end: end
    })
    this.resolveNewsPromise(requestConfiguration)
  }

  configureRequest (currentPromiseFunction, currentCallback, responseEvent, payload)  {
    
    let requestConfiguration = {
      load: {
        currentPromiseFunction: currentPromiseFunction,
        currentCallback: currentCallback
      },
      payload: payload,
      responseEvent: responseEvent
    }
    
    return requestConfiguration
  }

  resolveNewsPromise (requestConfiguration) {
    requestConfiguration.load.activePromise = requestConfiguration.load.currentPromiseFunction(requestConfiguration.payload)
  
    if (requestConfiguration.load.currentCallback instanceof Function) {
      requestConfiguration.load.activePromise
        .then(response => requestConfiguration.load.currentCallback(response, requestConfiguration.responseEvent))
        .catch(e => {
          
          this.errorCallback(e)
        })
    } else {
      // requestConfiguration.load.error = 'callback function not properly setup'
    }
  }
}

const newsServiceInstance = new NewsService()
const newsLoadedEvent = 'newsLoadedEvent'
const highlightsLoadedEvent = 'highlightsLoadedEvent'
const newsErrorEvent = 'newsErrorEvent'
const teamsLoadedEvent = 'teamsLoadedEvent'
const videosLoadedEvent = 'videosLoadedEvent' 

export default newsServiceInstance

export {
    newsLoadedEvent,
    newsErrorEvent,
    highlightsLoadedEvent,
    teamsLoadedEvent,
    videosLoadedEvent
}

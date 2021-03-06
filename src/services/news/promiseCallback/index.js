import eventBus from '../../../util/EventBus'

const newsCallback = (response, event) => {
  let news = response
  eventBus.dispatchEvent(event, news)
}
const teamsCallback = (response, event) => {
  let teams = response
  eventBus.dispatchEvent(event, teams)
}
const videosCallback = (response, event) => {
  let videos = response
  eventBus.dispatchEvent(event, videos)
}

const newsByIdCallback = (response, event) => {
  let news = response;
  eventBus.dispatchEvent(event, news)
}

const teamByIdCallback = (response, event) => {
  let team = response;
  eventBus.dispatchEvent(event, team)
}

const videoByIdCallback = (response, event) => {
  let video = response;
  eventBus.dispatchEvent(event, video)
}

const errorCallback = (error, event) => {
  eventBus.dispatchEvent(event, error)
}

export {
  newsCallback,
  errorCallback,
  teamsCallback,
  videosCallback,
  teamByIdCallback,
  newsByIdCallback,
  videoByIdCallback

}

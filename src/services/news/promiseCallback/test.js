import eventBus from '../../../util/EventBus'
import { newsCallback, teamsCallback, videosCallback, newsByIdCallback, teamByIdCallback, videoByIdCallback } from '.'
import { newsLoadedEvent, teamsLoadedEvent, videosLoadedEvent, newsByIdLoadedEvent , teamByIdLoadedEvent, videoByIdLoadedEvent} from '..'

let spyEventBus

describe('promiseCallBacks', () => {
  it('should migrate all testes regarding callbacks to this test file', () => {

  })

  describe('resolvedPromise callbacks', () => {
    describe('newsCallback', () => {

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        newsCallback(response)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        newsCallback(response, newsLoadedEvent)
        global.expect(spyEventBus).toHaveBeenCalledWith(newsLoadedEvent, response)
      })
    })   
    describe('teamsCallback', () => {

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        teamsCallback(response)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        teamsCallback(response, teamsLoadedEvent)
        global.expect(spyEventBus).toHaveBeenCalledWith(teamsLoadedEvent, response)
      })
    }) 
    describe('videosCallback', () => {

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        videosCallback(response)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        videosCallback(response, videosLoadedEvent)
        global.expect(spyEventBus).toHaveBeenCalledWith(videosLoadedEvent, response)
      })
    })
    describe('newsByIdCallback', () => {

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        newsByIdCallback(response)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        newsByIdCallback(response, newsByIdLoadedEvent)
        global.expect(spyEventBus).toHaveBeenCalledWith(newsByIdLoadedEvent, response)
      })
    })   
    describe('teamByIdCallback', () => {

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        teamByIdCallback(response)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        teamByIdCallback(response, teamByIdLoadedEvent)
        global.expect(spyEventBus).toHaveBeenCalledWith(teamByIdLoadedEvent, response)
      })
    })
    
    describe('videoByIdCallback', () => {

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        videoByIdCallback(response)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        videoByIdCallback(response, videoByIdLoadedEvent)
        global.expect(spyEventBus).toHaveBeenCalledWith(videoByIdLoadedEvent, response)
      })
    }) 
  })
})

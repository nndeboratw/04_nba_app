import eventBus from '../../../util/EventBus'
import { newsCallback, teamsCallback, videosCallback } from '.'
import { newsLoadedEvent, teamsLoadedEvent, videosLoadedEvent } from '..'

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
  })
})

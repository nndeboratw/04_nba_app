import { expect } from 'chai'
import eventBus from '../../util/EventBus'
import { newsCallback } from '.'
import newsServiceInstance from '..'
import { newsLoadedEvent } from '..'

let spyEventBus

describe('promiseCallBacks', () => {
  it('should migrate all testes regarding callbacks to this test file', () => {

  })

  describe('resolvedPromise callbacks', () => {
    describe('newsCallback', () => {
      it('should pass value from response into the news.list', () => {
        let response = []
        newsCallback(response, newsServiceInstance)
        expect(newsServiceInstance.news.list).to.be.eqls(response)
      })

      it('should evoke dispatchEvent from eventBus once', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        newsCallback(response, newsServiceInstance)
        global.expect(spyEventBus).toHaveBeenCalledTimes(1)
      })

      it('should evoke dispatchEvent from eventBus with expected values', () => {
        spyEventBus = global.spyOn(eventBus, 'dispatchEvent')
        let response = []
        newsCallback(response, newsServiceInstance)
        global.expect(spyEventBus).toHaveBeenCalledWith(newsLoadedEvent, response)
      })
    })    
  })
})

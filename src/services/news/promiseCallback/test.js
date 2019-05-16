import eventBus from '../../../util/EventBus'
import { newsCallback } from '.'
import { newsLoadedEvent } from '..'

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
  })
})

import { expect } from 'chai'
import newsServiceInstance,
{ newsLoadedEvent, highlightsLoadedEvent, teamsLoadedEvent} from '.'
import { newsCallback, teamsCallback}
  from './promiseCallback'
import { getAllNewsPromise, getNewsByIntervalPromise, getTeamsPromise }
  from './promiseFactory'
import request from '../../util/Request'

const spec = `specification for usage, use only the async 
    methods ment to produce final product. 
    getAllNews(),
    getNewsByInterval(start,end)`

describe('NewsService class Spec', () => {
  describe(spec, () => {
    it('shows specification', () => {
    })
  })
  describe('events exported', () => {
    it('should exist a string newsLoadedEvent', () => {
      expect(newsLoadedEvent).to.be.a('string')
    })

    it('should not be empty newsLoadedEvent', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(newsLoadedEvent).not.to.be.empty
    })
  })

  describe('instance', () => {
    it('should be an object', () => {
      expect(newsServiceInstance).to.be.a('object')
    })
  })

  describe('smoke/base tests', () => {

    it('should have a method called resolveNewsPromise', () => {
      expect(newsServiceInstance.resolveNewsPromise).to.be.a('function')
    })

    it('should have a method called getAllNews', () => {
      expect(newsServiceInstance.getAllNews).to.be.a('function')
    })

    it('should have a method called getNewsByInterval', () => {
      expect(newsServiceInstance.getNewsByInterval).to.be.a('function')
    })

    it('should have a method called getHighlightsByInterval', () => {
      expect(newsServiceInstance.getHighlightsByInterval).to.be.a('function')
    })

    it('should have a method called getTeams', () => {
      expect(newsServiceInstance.getTeams).to.be.a('function')
    })
  })
  let spyOnService
  describe('get  news suite', () => {
    describe('getAllNews', () => {
      describe('with blank objects', () => {
        beforeEach(() => {
          global.spyOn(request, 'get').and.returnValue(Promise.resolve([{}, {}]))
          spyOnService = global.spyOn(newsServiceInstance, 'configureRequest')
        })
        it('should make the load.currentPromiseFunction equals to the getAllNewsPromise', async () => {
          newsServiceInstance.getAllNews()
          global.expect(spyOnService).toHaveBeenCalledWith(getAllNewsPromise, newsCallback, newsLoadedEvent, {})
        })
      })
    })

    describe('getNewsByInterval', () => {
      describe('with blank objects', () => {
        beforeEach(() => {
          global.spyOn(request, 'get').and.returnValue(Promise.resolve([{}, {}]))
          spyOnService = global.spyOn(newsServiceInstance, 'configureRequest')
        })
        it('should make the load.currentPromiseFunction equals to the getAllNewsPromise', async () => {
          newsServiceInstance.getNewsByInterval(0, 1)
          global.expect(spyOnService).toHaveBeenCalledWith(getNewsByIntervalPromise, newsCallback, newsLoadedEvent, {start: 0, end: 1})
        })
      })
    })
  })

  describe('get  highlights suite', () => {
    describe('getHighlightsByInterval', () => {
      describe('with blank objects', () => {
        beforeEach(() => {
          global.spyOn(request, 'get').and.returnValue(Promise.resolve([{}, {}]))
          spyOnService = global.spyOn(newsServiceInstance, 'configureRequest')
        })
        it('should make the load.currentPromiseFunction equals to the getAllNewsPromise', async () => {
          newsServiceInstance.getHighlightsByInterval(0, 1)
          global.expect(spyOnService).toHaveBeenCalledWith(getNewsByIntervalPromise, newsCallback, highlightsLoadedEvent, {start: 0, end: 1})
        })
      })
    })
  })

  describe('get  teams suite', () => {
    describe('getTeams', () => {
      describe('with blank objects', () => {
        beforeEach(() => {
          global.spyOn(request, 'get').and.returnValue(Promise.resolve([{}, {}]))
          spyOnService = global.spyOn(newsServiceInstance, 'configureRequest')
        })
        it('should make the load.currentPromiseFunction equals to the getTeamsPromise', async () => {
          newsServiceInstance.getTeams()
          global.expect(spyOnService).toHaveBeenCalledWith(getTeamsPromise, teamsCallback, teamsLoadedEvent)
        })
      })
    })
  })
  
})

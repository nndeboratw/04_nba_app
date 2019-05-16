import { expect } from 'chai'
import newsServiceInstance,
{ newsLoadedEvent} from '.'
import { newsCallback}
  from './promiseCallback'
import { getAllNewsPromise, getNewsByIntervalPromise }
  from './promiseFactory'
import request from '../util/Request'

let spyget

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
    it('should have a property called news', () => {
      expect(newsServiceInstance.news).to.be.a('object')
    })

    it('should have a property called load', () => {
      expect(newsServiceInstance.load).to.be.a('object')
    })

    it('should have a method called resolveNewsPromise', () => {
      expect(newsServiceInstance.resolveNewsPromise).to.be.a('function')
    })

    it('should have a method called getAllNews', () => {
      expect(newsServiceInstance.getAllNews).to.be.a('function')
    })

    it('should have a method called getNewsByInterval', () => {
      expect(newsServiceInstance.getNewsByInterval).to.be.a('function')
    })

    it('should have a method called resetService', () => {
      expect(newsServiceInstance.resetService).to.be.a('function')
    })
  })

  describe('get all news suite', () => {
    describe('getAllNews', () => {
      describe('with blank objects', () => {
        beforeEach(() => {
          spyget = global.spyOn(request, 'get').and.returnValue(Promise.resolve([{}, {}]))
        })
        it('should make the load.currentPromiseFunction equals to the getAllNewsPromise', async () => {
          await newsServiceInstance.getAllNews()
          expect(newsServiceInstance.load.currentPromiseFunction).to.be.eql(getAllNewsPromise)
        })

        it('should make the load.currentCallback equals to newsCallback', async () => {
          await newsServiceInstance.getAllNews()
          expect(newsServiceInstance.load.currentCallback.name).to.be.eql(newsCallback.name)
        })

        it('should load into the resources.list the value of [{}, {}]', async () => {
          await newsServiceInstance.getAllNews()
          expect(newsServiceInstance.news.list).to.be.eql([{}, {}])
        })
      })
    })

    describe('get news by interval suite', () => {
        describe('getNewsByInterval', () => {
            describe('with blank objects', () => {
            beforeEach(() => {
                spyget = global.spyOn(request, 'get').and.returnValue(Promise.resolve([{id:1,team:3}, {id:2,team:4}]))
            })
            it('should make the load.currentPromiseFunction equals to the getAllNewsPromise', async () => {
                await newsServiceInstance.getNewsByInterval()
                expect(newsServiceInstance.load.currentPromiseFunction).to.be.eql(getNewsByIntervalPromise)
            })

            it('should make the load.currentCallback equals to newsCallback', async () => {
                await newsServiceInstance.getNewsByInterval()
                expect(newsServiceInstance.load.currentCallback.name).to.be.eql(newsCallback.name)
            })

            it('should load into the resources.list the value of [{}, {}]', async () => {
                await newsServiceInstance.getNewsByInterval()
                expect(newsServiceInstance.news.list).to.be.eql([{id:1,team:3}, {id:2,team:4}])
            })
            })
        })
    })
  })

  describe('resetService', () => {
    it('should turn the payload into empty string', () => {
        newsServiceInstance.resetService()
        console.log(newsServiceInstance.payload);
        
      expect(newsServiceInstance.payload.start).to.be.eqls('')
      expect(newsServiceInstance.payload.end).to.be.eqls('')
    })

    it('should turn the load.currentPromiseFunction into empty object', () => {
        newsServiceInstance.resetService()
      expect(newsServiceInstance.load.currentPromiseFunction).to.be.eqls({})
    })

    it('should turn the load.currentPromiseFunction into empty object', () => {
        newsServiceInstance.resetService()
      expect(newsServiceInstance.load.currentCallback).to.be.eqls({})
    })
  })

  describe('resolveNewsPromise', () => {
    describe('return as list', () => {
      beforeEach(() => {
        spyget = global.spyOn(request, 'get').and.returnValue(Promise.resolve([{}, {}]))
        newsServiceInstance.load.currentPromiseFunction = getAllNewsPromise
        newsServiceInstance.load.currentCallback = newsCallback
      })
      it('should store in the activePromise the resulting promise from the get', () => {
        newsServiceInstance.resolveNewsPromise()
        expect(newsServiceInstance.load.activePromise).to.be.an('Promise')
      })
      it('should store in the news.list the resolved value as an array', () => {
        newsServiceInstance.resolveNewsPromise()
        expect(newsServiceInstance.news.list).to.be.an('array')
      })
      it('should news.list have length of 2', () => {
        newsServiceInstance.resolveNewsPromise()
        expect(newsServiceInstance.news.list.length).to.be.equals(2)
      })
    })
  })
})

import request from '../../../util/Request'
import { getAllNewsPromise, getNewsByIntervalPromise, getTeamsPromise } from '.'

let spyget


const news = [{
  id:1,
  team:3,
  title: "Excepteur sint occaecat cupidatat non proident.",
  image: "1.jpeg",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  date: "10/12/2018",
  author: "John Secada",
  tags: ["Knicks","Porzinguis"]
}]
describe('promiseFactory', () => {
  

  describe('promises functions suite', () => {
    describe('getAllNewsPromise', () => {
      describe('promise context', () => {
        beforeEach(() => {
          let mockPromiseResponse = Promise.resolve(news)
          spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
        })
        it('should evoke a get once', () => {
          getAllNewsPromise()
          global.expect(spyget).toHaveBeenCalledTimes(1)
          
        })
        it("should evoke a get with the url '/news", () => {
          getAllNewsPromise()
          global.expect(spyget).toHaveBeenCalledWith('/news')
        })
      })
    })
    describe('getNewsByIntervalPromise', () => {
      describe('promise context', () => {
        beforeEach(() => {
          let mockPromiseResponse = Promise.resolve(news)
          spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
        })
        it('should evoke a get once', () => {
          getNewsByIntervalPromise({start: 0, end: 1})
          global.expect(spyget).toHaveBeenCalledTimes(1)
          
        })
        it("should evoke a get with the url '/news?_start=0&_end=1", () => {
          getNewsByIntervalPromise({start: 0, end: 1})
          global.expect(spyget).toHaveBeenCalledWith('/news?_start=0&_end=1')
        })
      })
    })

    describe('getTeamsPromise', () => {
      describe('promise context', () => {
        beforeEach(() => {
          let mockPromiseResponse = Promise.resolve(news)
          spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
        })
        it('should evoke a get once', () => {
          getTeamsPromise({start: 0, end: 1})
          global.expect(spyget).toHaveBeenCalledTimes(1)
          
        })
        it("should evoke a get with the url '/news?_start=0&_end=1", () => {
          getTeamsPromise({start: 0, end: 1})
          global.expect(spyget).toHaveBeenCalledWith('/teams')
        })
      })
    })
  })
})



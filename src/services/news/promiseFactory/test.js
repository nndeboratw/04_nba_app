import request from '../../../util/Request'
import { getAllNewsPromise, getNewsByIntervalPromise, getTeamsPromise, getVideosByIntervalPromise, getNewByIdPromise, getTeamByIdPromise, getVideoByIdPromise } from '.'

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
        it("should evoke a get with the url '/teams", () => {
          getTeamsPromise({start: 0, end: 1})
          global.expect(spyget).toHaveBeenCalledWith('/teams')
        })
      })
      describe('getVideosPromise', () => {
        describe('promise context', () => {
          beforeEach(() => {
            let mockPromiseResponse = Promise.resolve(news)
            spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
          })
          it('should evoke a get once', () => {
            getVideosByIntervalPromise({start: 0, end: 1})
            global.expect(spyget).toHaveBeenCalledTimes(1)
            
          })
          it("should evoke a get with the url '/videos?_start=0&_end=1", () => {
            getVideosByIntervalPromise({start: 0, end: 1})
            global.expect(spyget).toHaveBeenCalledWith('/videos?_start=0&_end=1')
          })
        })
      })
      describe('getNewByIdPromise', () => {
        describe('promise context', () => {
          beforeEach(() => {
            let mockPromiseResponse = Promise.resolve({news})
            spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
          })
          it('should evoke a get once', () => {
            getNewByIdPromise(1)
            global.expect(spyget).toHaveBeenCalledTimes(1)
            
          })
          it("should evoke a get with the url '/news/1", () => {
            getNewByIdPromise(1)
            global.expect(spyget).toHaveBeenCalledWith('/news/1')
          })
        })
      })
  
      describe('getTeamByIdPromise', () => {
        describe('promise context', () => {
          beforeEach(() => {
            let mockPromiseResponse = Promise.resolve(news)
            spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
          })
          it('should evoke a get once', () => {
            getTeamByIdPromise(1)
            global.expect(spyget).toHaveBeenCalledTimes(1)
            
          })
          it("should evoke a get with the url '/teams/1", () => {
            getTeamByIdPromise(1)
            global.expect(spyget).toHaveBeenCalledWith('/teams/1')
          })
        })
      })

      describe('getVideoByIdPromise', () => {
        describe('promise context', () => {
          beforeEach(() => {
            let mockPromiseResponse = Promise.resolve({news})
            spyget = global.spyOn(request, 'get').and.returnValue(mockPromiseResponse)
          })
          it('should evoke a get once', () => {
            getVideoByIdPromise(1)
            global.expect(spyget).toHaveBeenCalledTimes(1)
            
          })
          it("should evoke a get with the url '/videos/1", () => {
            getVideoByIdPromise(1)
            global.expect(spyget).toHaveBeenCalledWith('/videos/1')
          })
        })
      })
    })
  })
})

import request from '../../util/request'
import { getAllNewsPromise } from '.'

let spyget

describe('promiseFactory', () => {
  it('should migrate all testes regarding promise factory to this test file', () => {

  })

  describe('promises functions suite', () => {
    describe('getAllNewsPromise', () => {
      describe('promise context', () => {
        beforeEach(() => {
          spyget = global.spyOn(request, 'get').and.returnValue(Promise.resolve({ test: 'test' }))
        })
        it('should evoke a get once', () => {
          getAllNewsPromise()
          global.expect(spyget).toHaveBeenCalledTimes(1)
        })
        it("should evoke a get with the url '/articles' ", () => {
          getAllNewsPromise()
          global.expect(spyget).toHaveBeenCalledWith('/articles')
        })
      })
    })
  })
})

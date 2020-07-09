import {types} from '../../actions/types'
import postsReducer from './reducer'

describe('Posts reducer', () => {
    it('Should return default state', () => {
        const newState = postsReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it('Should return a new state if receiving a type', () => {
        const posts = [{title: 'Test1'}, {title: 'Test2'}, {title: 'Test3'}]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
})

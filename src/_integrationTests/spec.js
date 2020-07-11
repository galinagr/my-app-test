import moxios from 'moxios'
import {testStore} from "../../Utils"
import {fetchPosts} from "../actions"

describe("FetchPosts action", () => {
    beforeEach(() => {
        moxios.install()
    })
    test("Store is updated correctly", () => {

        const expectedState = [{
            title: 'Test Title 1',
            body: 'Some text'
        }, {
            title: 'Test Title 2',
            body: 'Some text'
        }, {
            title: 'Test Title 3',
            body: 'Some text'
        }
        ]

        const store = testStore()
        moxios.wait(() => {
            const requests = moxios.requests.mostRecent()
            requests.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState()
                expect(newState.posts).toBe(expectedState)
            })
    })


    afterEach(() => {
        moxios.uninstall()
    })
})

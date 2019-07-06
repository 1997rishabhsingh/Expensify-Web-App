import authReducer from '../../reducers/auth'

test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('Should clear uid on logout', () => {
    const action = {
        type: 'LOGIN'
    }
    const state = authReducer({uid: '123abc'}, action)
    expect(state).toEqual({})
})
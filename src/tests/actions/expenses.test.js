import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import {addExpense, startAddExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'


const createMockStore = configureMockStore([thunk])

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'Note is new here'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Note is new here'
        }
    })
})

test('Should setup add expense action object with provided values', () => {
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 30000,
        note: 'This on is good!',
        createdAt: 100
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        database.ref(`expenses/${action[0].expense.id}`).once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseData)
                done()
            })
    })
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        database.ref(`expenses/${action[0].expense.id}`).once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseDefaults)
                done()
            })
    })
})

// test('Should setup add expense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })
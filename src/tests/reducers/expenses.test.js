import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const newExpense = {
        id: '355',
        description: 'Test Expense',
        note: 'Its a test Expense',
        amount: 68300,
        createdAt: 560000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})

test('Should edit expense', () => {
    const updates = {
        note: 'This is a note',
        amount: 3498,
        description: 'All new expense',
        createdAt: 6598000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].note).toBe(updates.note)
    expect(state[1].amount).toBe(updates.amount)
    expect(state[1].description).toBe(updates.description)
    expect(state[1].createdAt).toBe(updates.createdAt)
})

test('Should not edit expense', () => {
    const updates = {
        note: 'This is a note',
        amount: 3498,
        description: 'All new expense',
        createdAt: 6598000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})
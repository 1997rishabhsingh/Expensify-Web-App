import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('Should correctly add up a single expense', () => {
    const amount = expenses[0].amount
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(amount)
})

test('Should correctly add up multiple expenses', () => {
    const amount = expenses[0].amount + expenses[1].amount + expenses[2].amount
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(amount)
})
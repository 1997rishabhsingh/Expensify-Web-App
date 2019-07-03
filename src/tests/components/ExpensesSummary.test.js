import React from 'react'
import {shallow} from 'enzyme'
import { ExpenseSummary } from '../../components/ExpensesSummary'

test('Should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23536456456456}/>)
    expect(wrapper).toMatchSnapshot()
})
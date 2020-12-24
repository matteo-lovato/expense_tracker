// logic to calcultate transactions data
import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
    incomeCategories,
    expenseCategories,
    resetCategories,
} from "./constants/categories";

const useTransactions = title => {
    // reset to 0
    resetCategories();
    // destructure transactions from the context
    const { transactions } = useContext(ExpenseTrackerContext);
    // get the same category's type of the title ( income or expense )
    const transactionsPerType = transactions.filter(t => t.type === title);
    // loop through all the categories and sum the amounts
    const total = transactionsPerType.reduce(
        (accumulator, currVal) => (accumulator += currVal.amount),
        0
    );
    // all the categories of Income or Expense type based on title
    const categories =
        title === "Income" ? incomeCategories : expenseCategories;

    // updated amonts for each category
    transactionsPerType.forEach(t => {
        const category = categories.find(c => (c.type = t.type));
        if (category) category.amount += t.amount;
    });

    // remove categories with amount = 0
    const filteredCategories = categories.filter(c => c.amount > 0);

    const chartData = {
        datasets: [
            {
                data: filteredCategories.map(c => c.amount),
                backgroundColor: filteredCategories.map(c => c.color),
            },
        ],
        labels: filteredCategories.map(c => c.type),
    };

    return { total, chartData };
};

export default useTransactions;

import NewExpenseForm from "@/components/NewExpenseForm";
import { getExpenses } from "@/lib/expenses";
import { formatCurrency } from "@/lib/utils";

export default async function Home() {
  const expenses = await getExpenses();
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <h2 className="text-zinc-500">Using Neon: Serverless Postgres</h2>
        <div className="mt-8 flex items-start justify-center gap-x-10">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Items</h3>
            <ul className="mt-4 flex flex-col">
              {expenses.map((expense, index) => (
                <li
                  key={expense.id}
                  className={`flex justify-between ${
                    index % 2 == 0 && "bg-zinc-100"
                  } border-b-2 border-b-blue-900  p-2 px-5`}
                >
                  <span>{expense.title}</span>
                  <span>{formatCurrency(expense.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Create items</h3>

            <NewExpenseForm />
          </div>
        </div>
      </div>
    </section>
  );
}

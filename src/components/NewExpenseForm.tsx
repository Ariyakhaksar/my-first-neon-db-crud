"use client";
import React, { useActionState } from "react";
import { createExpenseAction } from '@/lib/actions'

type Props = {};

const NewExpenseForm = (props: Props) => {
  const [state, action] = useActionState(createExpenseAction, null);

  return (
    <form action={action} className="flex flex-col gap-3">
      <div className="flex gap-3 flex-col mt-2">
        <label htmlFor="title" className="font-bold text-xl">
          Title
        </label>
        <input type="text" name="title" id="title" className="bg-zinc-100 p-2 focus:outline-blue-500" />
      </div>{" "}
      <div className="flex gap-3 flex-col mt-2">
        <label htmlFor="amount" className="font-bold text-xl">
          Amount
        </label>
        <input type="number" name="amount" min={0} id="amount" className="bg-zinc-100 p-2 focus:outline-blue-500" />
      </div>
      <div className="flex gap-3 flex-col mt-2">
        <button type="submit" className="bg-blue-500 text-zinc-100 py-2 font-bold">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;

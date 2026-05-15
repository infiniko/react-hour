"use client";

import { useFormState } from "react-dom";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";
import { IoCloseOutline } from "react-icons/io5";
import { cancelBtnStyles } from "@/lib/utils";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message, {
        cancel: {
          label: <IoCloseOutline className="h-6 w-6" />,
          onClick: () => {},
        },
        cancelButtonStyle: cancelBtnStyles,
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;

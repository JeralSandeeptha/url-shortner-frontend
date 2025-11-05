import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router-dom";

export type registerUserProps = {
    userDetails: {
        email: string;
        password: string;
    },
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    navigate: NavigateFunction
}
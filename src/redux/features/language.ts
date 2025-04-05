import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageState = {
    language: "TH" | "EN";
}

const initialState: LanguageState = {
    language: "EN",
}

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<"TH" | "EN">) => {
            state.language = action.payload;
        },
    },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
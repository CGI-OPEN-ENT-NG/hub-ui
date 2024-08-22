import { InputValueState } from "./types";

const TITILE = "Users selection";
const SEARCH_PlACEHOLDER = "Search by first name, last name, class, or group";
const NO_RESULT =  "No result";
const EMPTY_SELECTION = "No user, class, or group selected";
const EXPAND_BUTTON = "See more..."

export const defaultTranslations = {
    title: TITILE,
    searchPlaceholder: SEARCH_PlACEHOLDER,
    noResults: NO_RESULT,
    emptySelection: EMPTY_SELECTION,
    expandButton: EXPAND_BUTTON,
} 

export const initialInputValue: InputValueState = {
    users: []
  };
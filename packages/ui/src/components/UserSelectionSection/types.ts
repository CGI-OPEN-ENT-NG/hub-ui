import { ForwardRefExoticComponent, RefAttributes } from "react";


export interface UserSelectionSectionTranslations {
  title: string;
  searchPlaceholder: string;
  noResults: string;
  emptySelection: string;
  expandButton: string;
}

export interface UserSelectionSectionProps {
  users: Users[];
  selectedUsers: Users[];
  onUserSelectionChange: (newSelectedUsers: Users[]) => void;
  minSearchLength?: number;
  translations?: UserSelectionSectionTranslations;
  chipVariantStyle?: "outlined" | "filled";
}

export interface ChipBoxProps {
  isScrollable: boolean;
  isEmpty: boolean;
}

export interface UserSelectionSectionRef {
  closeList: () => void;
}

export type UserSelectionSectionComponent = ForwardRefExoticComponent<
  UserSelectionSectionProps & RefAttributes<UserSelectionSectionRef>
>;

export type BasicValueType = string | number | boolean | null | undefined;
export interface Users {
  id: string | number;
  label: string;
  [key: string]: BasicValueType | BasicValueType[] | Record<string, BasicValueType>;
}

export interface InputValueState {
  users: Users[];
}
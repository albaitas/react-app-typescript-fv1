export interface ITodo {
  id: number;
  label: string;
  important: boolean;
  like: boolean;
}
export interface IData {
  data: ITodo[];
}
export interface IEdit {
  id: number | null;
  label: string;
}
export interface IArray {
  name: string;
  label: string;
}
export type RemoveTodo = (id: number) => void;
export type UpdateTodo = (id: number, value: ITodo) => void;
export type OnToggleImportant = (id: number) => void;
export type OnToggleLike = (id: number) => void;
export type AddTodo = (todo: ITodo) => void;
export type UpdateSearch = (term: string) => void;
export type SearchTodo = (items: ITodo[], term: string) => ITodo[];
export type UpdateFilter = (filt: string) => void;
export type OnSelect = (item: IArray) => void;
export type FilterTodo = (items: ITodo[], filt: string) => ITodo[];

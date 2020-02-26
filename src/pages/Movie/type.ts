export interface IListState {
    movies: any,
    count: number
}

export const IListStateDefaultValue: IListState = {
    movies: {},
    count: 0
};

export interface IProps {
    moviesData: any,
    setMovies: (data:any) => void
}
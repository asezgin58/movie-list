export interface IListState {
    movieList: any,
    count: number,
    page: number,
}

export const IListStateDefaultValue: IListState = {
    movieList: [],
    count: 0,
    page: 1
};

export interface IProps {
    moviesData: any,
    setMovies: (data: any) => void
}

export interface IFilterProps {
}

export interface IFilterState {
    inputText: string,
    yearCheck?: boolean
    year: number
}

export const IFilterStateDefaultValue: IFilterState = {
    inputText: '',
    year: 0
};
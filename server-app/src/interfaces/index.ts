export interface Data {
    rows: any[],
    meta: {
        page: number
        limit: number
        totalRows: number
        totalPages: number
    }
}

export interface Search {
    filters?: { [property: string]: any }
    page: number
    limit: number
}
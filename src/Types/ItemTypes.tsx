type NumberAttr =
    | number
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

export interface Photo {
    id: number,
    title: string,
    location: string,
    mediumImage: string,
    smallImage: string,
    alt?: string
    sizes?: string[]
    width: boolean | 'auto' | NumberAttr;
}


export interface PrintOption {
    size: string,
    material: string,
    cost: number
}
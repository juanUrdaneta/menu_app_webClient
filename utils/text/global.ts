enum languages {
    ES = 'es'
}

export interface ILangObject {[index:string]: {[key in languages]: string}}

export const GLOBAL: ILangObject = {
    APP_NAME: {
        es: 'Menu App',
    }
}
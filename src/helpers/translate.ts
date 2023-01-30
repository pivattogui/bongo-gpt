import { Translate } from "next-translate"

export const translateMoods = (t:  Translate, type: string) => {
    switch (type) {
        case "NEUTRAL": {
            return t('mood.normal')
        }
        case "LOVED": {
            return t('mood.lovingly')
        }
        case "RUDE": {
            return t('mood.rudely')
        }
        case "PHILOSOPHICAL": {
            return t('mood.philosophical')
        }
    }
}

export const translateLanguages = (type: string) => {
    switch (type) {
        case 'en-US':
            return 'English'
        case 'pt-BR':
            return 'Português'
    }
}
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('decks', () => {
        return HttpResponse.json([
            {id: 1, name: 'Presidents'},
            {id: 2, name: 'Periodic Table Elements'},
            {id: 3, name: 'HTML Attributes'}
        ])
    })
]
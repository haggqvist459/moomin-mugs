// Path constants for routes
export const ROUTES = {
    HOME: '/',
    DETAILS: '/details/:id',
    DETAILS_PAGE: '/details/',
    ERROR: '*',
    ADMIN: '/admin',
    DELETE: '/admin/delete',
    EDIT_PAGE: '/admin/edit/',
    EDIT_DETAILS: '/admin/edit/:id',
    ADD: '/admin/add'
}


export const NAV_BAR_OPTIONS = {
    HOME: [
        {
            "id": "2",
            "route": ROUTES.HOME,
            "text": "Home"
        },
        {
            "id": "1",
            "route": ROUTES.ADMIN,
            "text": "Admin"
        }
    ],
    ADMIN: [
        {
            "id": "3",
            "route": ROUTES.HOME,
            "text": "Home"
        },
        {
            "id": "7",
            "route": ROUTES.ADMIN,
            "text": "Admin"
        },
        {
            "id": "5",
            "route": ROUTES.ADD,
            "text": "Add"
        },
        {
            "id": "4",
            "route": ROUTES.EDIT_PAGE,
            "text": "Edit"
        },
        {
            "id": "6",
            "route": ROUTES.DELETE,
            "text": "Delete"
        }
    ]
}

export const ADMIN_LIST_OPTIONS = {
    EDIT: 'edit',
    DELETE: 'delete'
}



export const LOCALSTORAGE_KEY = 'storedMugList'


// NOT IN USE 

export const INDEXED_DB = {
    'db': 'mugsDatabase',
    'store': 'mugsStore',
    'yearDataField': 'year',
    'seasonDataField': 'season',
    'nameDataField': 'name',
    'nameIndex': 'name',
    'yearIndex': 'releaseYear',
    'yearSeasonIndex': 'yearAndSeason'
}

export const API = {
    URL: 'http://localhost:8888/mugs/'
}

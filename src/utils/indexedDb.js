import { openDB } from 'idb';
import { INDEXED_DB } from './constants';

const indexedDB = 
window.indexedDB ||
window.mozIndexedDB ||
window.webkitIndexedDB || 
window.msIndexedDB ||
window.shimIndexedDB;


export const createOrOpenDB = async () => {

    const dbPromise = await openDB(INDEXED_DB.db, 1);

}


const openDB = () => {

    const request = indexedDB.open(INDEXED_DB.db, 1);

}


request.onerror = (event) => {
    console.error("An error occured with IndexedDB");
    console.error(event);
}

request.onupgradeneeded = () => {
    const db = request.result;
    const store = db.createObjectStore(INDEXED_DB.store, { keyPath: 'id' });
    store.createIndex(INDEXED_DB.nameIndex, [INDEXED_DB.nameDataField], { unique: true});
    store.createIndex(INDEXED_DB.yearIndex, [INDEXED_DB.yearDataField], { unique: false });
    store.createIndex(INDEXED_DB.yearSeasonIndex, [INDEXED_DB.yearDataField, INDEXED_DB.seasonDataField], { unique: false})

}


const addMugtoDB = (mug) => {

    const newMug = mug; 

    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(INDEXED_DB.store, 'readwrite');
        const store = transaction.objectStore(INDEXED_DB.store);

    
    }
}

const fetchAllMugs = () => {

    request.onsuccess = () => {

        const db = request.result;
        const transaction = db.transaction(INDEXED_DB.store, 'readonly');
        const store = transaction.objectStore(INDEXED_DB.store);
        const nameIndex = store.index(INDEXED_DB.nameIndex);
        const yearIndex = store.index(INDEXED_DB.yearIndex);
        const yearAndSeason = store.index(INDEXED_DB.yearSeasonIndex);

        const allMugs = store.getAll();

        transaction.oncomplete = () => {
            db.close();
        }
        
    }



}

const updateMug = () => {

    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(INDEXED_DB.store, 'readwrite');
        const store = transaction.objectStore(INDEXED_DB.store);

    
    }

}

const deleteMug = () => {

    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(INDEXED_DB.store, 'readwrite');
        const store = transaction.objectStore(INDEXED_DB.store);

    
    }
}


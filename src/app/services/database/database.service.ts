import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {EntityGenerator} from "../../interfaces/entity";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbName = "entity-generator";
  private storeName = "entity";
  private dbVersion = 1;
  private db!: IDBDatabase;

  onSaveDb   = new Subject<void>();

  constructor() {
    this.initDB();
  }

  private initDB(): void {
    const request = indexedDB.open(this.dbName,this.dbVersion);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if(!db.objectStoreNames.contains(this.storeName)){
        db.createObjectStore(this.storeName, { keyPath: 'mainPackage'});
      }
    };

    request.onsuccess = (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
    };

    request.onerror = (event) => {
      console.error('Erro ao abrir banco de dados');
    }
  }

  add<EntityGenerator>(data: EntityGenerator): Promise<void> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], 'readwrite');
      const store = tx.objectStore(this.storeName);
      const req = store.put(data);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  getAll<EntityGenerator>():Promise<EntityGenerator[]> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], 'readonly');
      const store = tx.objectStore(this.storeName);
      const req = store.getAll();

      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  getById<EntityGenerator>(id: string): Promise<EntityGenerator | undefined> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], 'readonly');
      const store = tx.objectStore(this.storeName);
      const req = store.get(id);

      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], 'readwrite');
      const store = tx.objectStore(this.storeName);
      const req = store.delete(id);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }



}

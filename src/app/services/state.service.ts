import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Entity } from '../interfaces/entity';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state = new BehaviorSubject<{ entity: Entity}>({
    entity: new Entity(),
  });

  public state$ = this.state.asObservable();

  updateState(newState: { entity: Entity }) {
    this.state.next(newState);
  }

  getCurrentState() {
    return this.state.getValue();
  }

}

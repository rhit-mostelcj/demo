import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  count = 0;

  constructor() { }

  pressLike() {
    this.count++;
  }
}

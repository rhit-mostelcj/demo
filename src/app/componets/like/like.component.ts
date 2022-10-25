import { Component, OnInit } from '@angular/core';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor(public like: LikeService) { }

  ngOnInit(): void {
  }

}

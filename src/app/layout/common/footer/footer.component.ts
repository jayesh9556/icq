import { Component, OnInit } from "@angular/core";

import servingsArray from "../../../resources/serving.json";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  public servings: {}[] = servingsArray;

  constructor() {}

  ngOnInit(): void {}
}

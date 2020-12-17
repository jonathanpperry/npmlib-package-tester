import { Component } from "@angular/core";
import { JonnyramenLibService } from "jonnyramen-lib";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  user = null;
  constructor(private jonnyramenLibService: JonnyramenLibService) {}

  getData() {
    this.jonnyramenLibService.getData().subscribe((res) => {
      this.user = res;
    });
  }
}

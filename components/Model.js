import { ImageRequireSource } from "react-native";

export class ScheduleOption {
    constructor(id, title, ages, source) {
      this.id = id,
      this.title = title,
      this.ages = ages,
    }
}

export class Position {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class potrfolioImg {
  readonly id: number;
  readonly name: string;
  readonly text: string;
  readonly img: string;
  readonly alt: string;

  constructor(id: number, name: string, text: string, img: string, alt: string) {

    this.id = id;
    this.name = name;
    this.text = text;
    this.img = img;
    this.alt = alt;
  }


}

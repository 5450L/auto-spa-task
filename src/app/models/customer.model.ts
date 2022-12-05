export class Customer {
  fullName: { surname: string; name: string; patr: string };
  phone: number;
  postsAmount: number;
  adress: string;
  postBranch: string;
  constructor(
    fullName: { surname: string; name: string; patr: string },
    phone: number,
    postsAmount: number,
    adress: string,
    postBranch: string
  ) {
    this.fullName = fullName;
    this.phone = phone;
    this.postsAmount = postsAmount;
    this.adress = adress;
    this.postBranch = postBranch;
  }
}

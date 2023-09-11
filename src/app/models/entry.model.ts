import { PhoneModel } from "./phone.model";

export interface EntryModel {
  id?: any,
  name: string,
  title: string,
  phones: PhoneModel[]
}

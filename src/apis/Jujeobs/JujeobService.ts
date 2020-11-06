import jujeobDatabase from "@/consts/jujeobDatabase";
import { convertJuJeobParams, randInArray, stringReplacer } from "@/helpers/utils";

export class JujeobService {
  getRand() {
    return randInArray(jujeobDatabase)
  }

  getJujeobText(name: string) {
    return stringReplacer(this.getRand().body, convertJuJeobParams(name)) 
  }
}


export const jujeobService = new JujeobService()
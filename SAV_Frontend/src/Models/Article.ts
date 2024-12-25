import { Reclamation } from "./Reclamation"

export interface Article{
    id:number
    nom:string
    description:string
    dateFabrication:string
    dateFinGarantie :string  
    reclamations: Reclamation[]

}
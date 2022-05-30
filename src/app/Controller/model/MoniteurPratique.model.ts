import {GenderVo} from './Gender.model';



export class MoniteurPratiqueVo {

    public id: number;

    public reference: string;
    public nom: string;
    public prenom: string;
    public email: string;
    public adress: string;
    public phone: string;
    public fix: string;
    public lieuNaissance: Date;
    public dateNaissance: Date;
    public cin: string;
    public picture: string;
                public lieuNaissanceMax: string ;
                public lieuNaissanceMin: string ;
                public dateNaissanceMax: string ;
                public dateNaissanceMin: string ;
      public genderVo: GenderVo ;

}

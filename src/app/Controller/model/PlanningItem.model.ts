import {JourVo} from './Jour.model';



export class PlanningItemVo {

    public id: number;

    public dateOuverture: Date;
    public dateFermeture: Date;
                public dateOuvertureMax: string ;
                public dateOuvertureMin: string ;
                public dateFermetureMax: string ;
                public dateFermetureMin: string ;
      public jourVo: JourVo ;

}

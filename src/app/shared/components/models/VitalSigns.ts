export class VitalSigns {
    id : number;
    fechaRegistro : Date;
    temperatura : number;
    frecuenciaCardiaca : number;
    saturacionOxigeno : number;
    presionArterial : number;
    idPaciente : number;

    constructor(data: any) {
        this.id = data.id;
        this.fechaRegistro = data.fechaRegistro;
        this.temperatura = data.temperatura;
        this.frecuenciaCardiaca = data.frecuenciaCardiaca;
        this.saturacionOxigeno = data.saturacionOxigeno;
        this.presionArterial = data.presionArterial;
        this.idPaciente = data.idPaciente;
    }
}
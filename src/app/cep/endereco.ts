export class Endereco {

  public readonly data: Date = new Date();
  public readonly erro?: boolean;
  public cep: string = '';
  public logradouro: string = '';
  public complemento: string = '';
  public bairro: string = '';
  public localidade: string = '';
  public uf: string = '';
  public ibge: string = '';
  public gia: string = '';
  public ddd: string = '';
  public siafi: string = ''

  constructor(obj?: Partial<Endereco>) {
    Object.assign(this, obj)
  }
}

package subsistema.cep;

public class APIcep {

	private static APIcep instancia = new APIcep();
	
	private APIcep() {
		super();
	}
	
	public static APIcep getInstancia() {
		return instancia;
	}
	
	public String recuperarCidade(String cep) {
		return "Araraquara";
	}
	
	public String recuperarEstado(String cep) {
		return "SP";
	}
}

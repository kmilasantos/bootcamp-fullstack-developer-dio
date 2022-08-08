package facade;

import subsistema.cep.APIcep;
import subsistema.crm.CRMservice;

public class Facade {
	
	public void migrarCliente(String nome, String cep) {
		
		String cidade = APIcep.getInstancia().recuperarCidade(cep);
		String estado = APIcep.getInstancia().recuperarEstado(cep);
		
		CRMservice.gravarCliente(nome, cep, cidade, estado);
	}
}

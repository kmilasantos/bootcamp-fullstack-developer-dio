import facade.Facade;
import singleton.SingletonEager;
import singleton.SingletonLazy;
import singleton.SingletonLazyHolder;
import strategy.Comportamento;
import strategy.CompotamentoAgressivo;
import strategy.CompotamentoDefensivo;
import strategy.CompotamentoNormal;
import strategy.Robo;


public class test {

	public static void main(String[] args) {

		//Singleton:
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		
		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		eager = SingletonEager.getInstancia();
		System.out.println(eager);
		
		SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		
		
		//Strategy:
		Comportamento defensivo = new CompotamentoDefensivo();
		Comportamento normal =  new CompotamentoNormal();
		Comportamento agressivo = new CompotamentoAgressivo();
		
		Robo robo = new Robo();
		robo.setComportamento(normal);
		robo.mover();
		robo.setComportamento(defensivo);
		robo.mover();
		robo.setComportamento(agressivo);
		robo.mover();
		
		
		// Facade
		
		Facade facade = new Facade();
		facade.migrarCliente("Camila", "76811-504");		
	}

}
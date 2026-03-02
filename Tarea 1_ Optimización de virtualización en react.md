# Tarea 1: Francisco Programación Web Optimización de virtualización en React

---

Diana Fernanda Delgado Salcedo - A01644911  
Liliana Ramos Vázquez - A01644969  
Anna Sofía Ramírez Castro - A00574296  
Leonardo Mario Alberto Guillén Soria - A00574110  

Planeación de sistemas de software  
(Gpo 104)  

01 de marzo de 2026  
Equipo 44  

Francisco Ismael López Gómez  

---

1. **¿Qué es el DOM?**  
   El DOM (Document Object Model) es un modelo o representación gráfica del documento de una aplicación web creada por el navegador, sobre el cual este aplica los cambios necesarios en cada actualización de estado o evento.
   
2. **¿Qué es el virtual DOM?**  
   	El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM. Cuando ocurre un cambio en la aplicación web, el virtual DOM los interpreta y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.
   
3. **¿Qué es React.memo?**  
   React.memo es un HOC (Higher Order Component) que memoriza un componente funcional, permitiendo evitar renderizados innecesarios. Cuando un componente padre se renderiza, sus hijos también lo hacen por defecto, aunque sus propiedades no hayan cambiado. React.memo compara las propiedass anteriores con las nuevas y, si son iguales, evita que el componente se vuelva a renderizar.
   
4. **¿Qué es map()?**  
   	Map() es un método de arreglos en JavaScript que permite recorrer cada elemento de una lista y devolver una nueva lista transformada. En React, se utiliza principalmente para renderizar listas dinámicas de componentes, generando un elemento por cada dato del arreglo. Cada elemento creado mediante map() debe incluir una key única y estable, ya que esto permite identificar los elementos y optimizar el proceso de renderizado.  
     
5. **¿Cómo se relaciona el virtual DOM con React.memo y map()?**  
   	React.memo se relaciona con el virtual DOM porque evita que ciertos componentes generen una nueva representación en él cuando sus propiedades no han cambiado, reduciendo comparaciones innecesarias y mejorando el rendimiento.   
   Por otro lado, map() se utiliza para renderizar listas dinámicas, y al asignar una key única y estable a cada elemento, permite que el Virtual DOM identifique correctamente qué elementos fueron agregados, eliminados o modificados.  

6. **¿Qué realizó cada participante?**

| Integrante del equipo | Aportación |
|-----------------------|------------|
| Liliana               | Desarrollo del documento acerca del virtual DOM, página con contador. |
| Anna Sofía            | Implementación del componente Contador, manejo del estado con useState y optimización de los componentes hijos usando React.memo.|
| Diana Fernanda        | Desarrollo de la lista dinámica utilizando map(), implementación de la funcionalidad de agregar y eliminar elementos. |
| Leonardo              |  |

import React , {useContext} from 'react'
import { useState } from 'react';
import {collection, getFirestore, addDoc} from 'firebase/firestore';
import  {CartContext}  from '../../Context/CartContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Container} from 'react-bootstrap';

export default function Checkout() {
   const {cart} = useContext(CartContext); 
   const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  
   const [idCompra, setIdCompra] = useState('');

   function handleClickComprar(nombre,tel,email,apellido){
     const total =  cart.reduce((p, c) => p + c.total,0);

    const pedido = {
        buyer: {nombre, tel, email, apellido}, 
        carrito: [{cart}],
        total: {total}
        };
        
       const db = getFirestore();
       const collectionRef = collection(db, 'pedidos');
       addDoc(collectionRef, pedido).then(({id}) => setIdCompra(id));
  }
    return (  
      <Container>
         <div>
            <p>Su id de compra es : {idCompra}</p>
            <>
			<Formik
				initialValues={{
					nombre: '',
					email: '',
               tel:'',
               apellido:''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}
          // Validacion apellido
					if(!valores.apellido){
						errores.apellido = 'Por favor ingresa un apellido'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
						errores.apellido = 'El apellido solo puede contener letras y espacios'
					}
          // Validacion telefono
					if(!valores.tel){
						errores.tel = 'Por favor ingresa un telefono'
					} else if(!/^[0-9]{1,40}$/.test(valores.tel)){
						errores.tel = 'El nombre solo puede contener numeros'
					}
			 // Validacion correo
					if(!valores.email){
						errores.email = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
               handleClickComprar(valores.nombre,valores.tel, valores.email, valores.apellido)
               resetForm();
				   cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
             <label htmlFor="nombre">INGRESE SUS DATOS PERSONALES</label>
						<div>
							
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Ingrese su nombre"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
            <div>
							
							<Field
								type="text" 
								id="apellido" 
								name="apellido" 
								placeholder="Ingrese su apellido"
							/>
							<ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
						</div>
            <div>
							
							<Field
								type="text" 
								id="tel" 
								name="tel" 
								placeholder="Ingrese su telefono"
							/>
							<ErrorMessage name="tel" component={() => (<div className="error">{errors.tel}</div>)} />
						</div>
						<div>
							
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="Ingrese su correo electronico" 
							/>
							<ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
						</div>
					   <button onClick={handleClickComprar}>Comprar</button>
               	
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
          
         </div>
         </Container>
    );
}
/*
<h1>Complete para terminar su compra</h1>
            <input onChange={(e)=> setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></input><br/>
            <input onChange={(e)=> setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></input><br />
            <input onChange={(e)=> setEmail(e.target.value)} type={'email'} placeholder={'Ingrese email'}></input><br />
*/            
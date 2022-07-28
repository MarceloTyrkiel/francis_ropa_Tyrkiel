import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Checkout1 = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
          telefono:'',
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
					if(!valores.telefono){
						errores.telefono = 'Por favor ingresa un telefono'
					} else if(!/^[0-9]{1,40}$/.test(valores.telefono)){
						errores.telefono = 'El nombre solo puede contener numeros'
					}
					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
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
								id="telefono" 
								name="telefono" 
								placeholder="Ingrese su telefono"
							/>
							<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
						</div>
						<div>
							
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="Ingrese su correo electronico" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default Checkout1;
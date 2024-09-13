const getState = ({ getStore, getActions, setStore }) => {
	return {
		
		actions: {
			register: async (formData) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + '/api/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    const data = await response.json();
                    console.log('Response data:', data);

                    if (response.ok) {
                        return {
                            success: true,
                            message: 'Usuario creado exitosamente.',
                        };
                    } else {
                        return {
                            success: false,
                            message: data.message || 'Error desconocido durante el registro '
                        };
                    }
                } catch (error) {
                    console.error('Error en registerUser:', error);
                    return {
                        success: false,
                        message: 'Error de conexión o servidor no disponible'
                    };
                }
            },

	


			loginUser: async ({ email, password }) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ email, password })
					});
			
		
					let data;
					try {
						data = await response.json();
					} catch (e) {
						throw new Error('Error al analizar la respuesta del servidor');
					}
			
					console.log('Response data:', data);
			
					if (response.ok) {
					
						if (data && data.token && data.user) {
							localStorage.setItem("token", data.token);
							setStore({ 
								user: data.user,
								autenticado: true 
							});
							return {
								success: true,
								user: data.user,
								data: {
									token: data.token
								},
								message: 'Conexión exitosa con el servidor'
							};
						} else {
							console.error('Datos de respuesta incompletos:', data);
							return {
								success: false,
								message: 'Datos de respuesta incompletos'
							};
						}
					} else {
						
						return {
							success: false,
							message: data.message || 'Error desconocido'
						};
					}
				} catch (error) {
					console.error('Error en loginUser:', error);
					return {
						success: false,
						message: 'Error de conexión o servidor no disponible'
					};
				}
			},
			


			
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			}
		}
	};
};

export default getState;

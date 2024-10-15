# Proyecto de Autenticación y Dashboard de Cuenta Bancaria

Este proyecto es una aplicación web simple que permite a los usuarios registrarse e iniciar sesión, con almacenamiento local de los datos de usuario y contraseñas encriptadas. Una vez autenticado, el usuario puede acceder a un dashboard donde puede ver y operar con una cuenta bancaria ficticia.

## Características

- **Registro y Autenticación de Usuario**: Los usuarios pueden registrarse e iniciar sesión. Las contraseñas deben cumplir con requisitos de seguridad y se almacenan de forma encriptada en `localStorage`.
- **Validación con Bootstrap**: Validación de campos con feedback visual en caso de error.
- **Operaciones Bancarias**: Una vez autenticado, el usuario puede acreditar y debitar dinero de su cuenta, visualizar el saldo actual, el saldo anterior y una lista de transacciones.
- **Almacenamiento en LocalStorage**: Tanto los datos de usuario como la información de la cuenta bancaria se almacenan localmente, asociados al usuario autenticado.

## Tecnologías Utilizadas

- HTML, CSS y JavaScript
- Bootstrap 4
- Almacenamiento en `localStorage`

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ferqueve/asistenciaia.git

2. Abre el archivo index.html en tu navegador para iniciar la aplicación.

## Uso

1. Página de Inicio de Sesión
La página de inicio de sesión donde el usuario puede iniciar sesión o registrarse.

2. Validación de Campos
Ejemplo de validación de campos incorrectos usando Bootstrap. El usuario debe proporcionar un nombre de usuario y una contraseña válidos.

3. Registro de Nuevo Usuario
Formulario de registro que permite crear un nuevo usuario si no se ha registrado previamente.

4. Dashboard de Cuenta Bancaria
Dashboard donde el usuario puede visualizar y operar su cuenta bancaria ficticia.

5. Historial de Transacciones
Ejemplo de historial de transacciones donde se muestran los movimientos de acreditación y débito.

6. Estructura del Proyecto
index.html: Página principal para iniciar sesión o registrarse.
dashboard.html: Dashboard de cuenta bancaria para usuarios autenticados.
styles.css: Estilos personalizados para la aplicación.
scripts.js: Lógica de autenticación, almacenamiento y operaciones bancarias.

## Notas Importantes
1. Errores Intencionales: Este proyecto contiene errores de HTML, CSS y JavaScript intencionales para ser detectados y corregidos como parte del aprendizaje.

2. Encriptación Básica: La encriptación de la contraseña utiliza btoa, que es un método básico. Esto debe mejorarse para entornos de producción.
3. Uso de LocalStorage: Almacenar datos sensibles en localStorage no es recomendable para aplicaciones reales. Este proyecto es solo un ejercicio educativo.
## Próximos Pasos
- Mejorar la encriptación de contraseñas.
- Implementar una base de datos segura para almacenamiento de usuarios y transacciones.
- Corregir los errores intencionales y mejorar la validación de datos.
- Contribuciones
- Si encuentras un error o deseas mejorar este proyecto, ¡no dudes en enviar un Pull Request o abrir un Issue!

* Autor:  Fernando D. Quevedo.


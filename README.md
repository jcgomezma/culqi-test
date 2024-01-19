# Prueba técnica Culqi - Tokenización de tarjetas

# Requisitos

- **Crear token** - Generar token aleatorio con fecha de expiración.
  - **Validar datos de tarjeta** - Validar que los datos de la tarjeta sean válidos.
  - **Validar PK de negocio** - Consultar base de datos relación para verificar PK de negocio.
  - **Guardar token generado** - Encriptar y guardar datos de tarjeta en base de datos no relacional.
- **Obtener datos de tarjeta** - Obtener y desencriptar los datos de la tarjeta a partir del token generado.
  - **Verificar que el token exista**
  - **Verificar que el token siga vigente**

# Herramientas y librerías utilizadas

- **Serverless Framework con NodeJs**
- **PostgreSQL** - como base de datos relacional en RDS.
- **TypeORM** - como ORM.
- **REDIS** - como base de datos no relacional.
- **Jest** - como herramienta de pruebas.
- **Crypto** - como herramienta para encriptación.


# Ejecución

1. Configurar AWS CLI con las llaves de AWS.
2. Instalar librerías npm install.
3. Copiar el archivo .env.example con el nombre .env y agregar el valor de las llaves.
4. Usar el comando npm run local para levantar en local.

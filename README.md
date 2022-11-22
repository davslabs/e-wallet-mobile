# E-WALLET MOBILE

## Team Agreements

### Name Branching

La convención elegida es el modelo de GitFlow, es decir que utilizaremos feature branches que partiran desde la main branch.
El formato que tendra el nombre de la branch sera: `{prefijo}/{tarea-a-realizar}`

Ej:

- `feature/implementar-modal`
- `hotfix/reparar-error`
- `release/v1.0.0`

> Mas detalles en: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

### Commit Message Format

El formato que deberan tomar los commits sera: `{prefijo}({archivo-modificado}):{breve descripcion}`, donde la breve descripcion debera comenzar con un verbo en infinitivo, seguido de la tarea realizada.

Ej:

- `docs(readme.md): actualizar readme.md`
- `feat: agregar modal`
- `fix(styles.css): arreglar paleta de colores`

### Pull Request

Una vez finalizada la tarea sobre la feature branch se procedera a crear un PR, de tal manera que el resto del equipo pueda revisarlo y corregirlo bajo estas condiciones:

- El PR deberá contar con al menos 2 approvals para ser mergeado.
- El PR solo será mergeado por la persona elegida para hacer merges.
- El PR, si es de implementación, debera contar con su unit test.

BAJO NINGUN MOTIVO SE PUSHEARA DIRECTAMENTE A LA MAIN BRANCH.

## Setup

Correr en la terminal:

```
npm install && npm run build
```

## Run

```
npm run start
```

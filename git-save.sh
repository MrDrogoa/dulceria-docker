#!/bin/bash

# Añadir todos los archivos al staging area
echo "Añadiendo archivos al área de preparación (stage)..."
git add .

# Solicitar mensaje de commit
echo "Por favor, ingresa un mensaje para el commit:"
read commitMessage

# Realizar commit con el mensaje proporcionado
echo "Creando commit con mensaje: '$commitMessage'"
git commit -m "$commitMessage"

# Subir los cambios a GitHub
echo "Subiendo cambios a GitHub..."
git push origin master

echo "¡Listo! Tus cambios han sido guardados y subidos a GitHub."

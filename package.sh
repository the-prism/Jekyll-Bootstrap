#!/bin/bash

echo 'Remove existing package'

rm package.zip

echo 'Create new one'

zip -r Heleus.zip ./* .git .gitignore -x _site/**\*
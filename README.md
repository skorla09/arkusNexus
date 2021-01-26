```sh
# THIS ENV VARIABLES SHOULD GO ON AN .ENV FILE IN THE ImageServer PROJECT folder
# THE SERVER USES CLOADINARY TO UPLOAD THE IMAGE FILES IN ORRDER TO USE THE URL 
#OF THAT IMAGE TO BE VISIBLE

REACT_APP_BASE_URL=http://localhost:8080

# CLOUDINARY CREDENTIALS

REACT_APP_CLOUD_NAME=#CLOUDINARY APP NAME
REACT_APP_CLOUD_KEY=#CLOUDINARY KEY
REACT_APP_CLOUD_PRESET=#CLOUDINARY PRESET
REACT_APP_CLOUD_URL=#CLOUDINARY URL

#to run server go to the imageServer folder
-cd imageServer
-yarn start

#to run main project, in the root of the project
#install dependencies 
yarn

#after dependencies installation
yarn start
```

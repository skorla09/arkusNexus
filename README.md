#Install dependencies
yarn

#copy env files
yarn copy

#Add Cloudinary keys for production/development to corresponding #.env files
REACT_APP_BASE_URL=#ASENSEI'S BACKEND URL
# CLOUDINARY CREDENTIALS
REACT_APP_CLOUD_NAME=#CLOUDINARY APP NAME
REACT_APP_CLOUD_KEY=#CLOUDINARY KEY
REACT_APP_CLOUD_PRESET=#CLOUDINARY PRESET
REACT_APP_CLOUD_URL=#CLOUDINARY URL

#after dependencies installation
yarn start

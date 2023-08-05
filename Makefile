deploy:
	echo 'open Keychain Access and delete the login/system entry for github.com'
	echo 'paste in classic token when prompted...'
	NODE_OPTIONS=--openssl-legacy-provider GIT_USER=pcj yarn run deploy
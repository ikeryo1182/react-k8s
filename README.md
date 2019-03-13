
```
$docker build -t <dockerp-hub-account>/client-web:v0.1.0 .
$docker run -d -p 8080:80 <dockerp-hub-account>/client-web:v0.1.0
$kubectl create -f react.yaml
```
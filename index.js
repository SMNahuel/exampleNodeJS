const exphbs = require("express-handlebars"); //Para el manejo de los HTML
const morgan = require("morgan");
const bodyParser = require("body-parser"); //Para el manejo de los strings JSON
const express = require("express"); //Para el manejo del servidor Web
const hbs = require('hbs');
const path = require("path")
/* const MySQL = require("./modulos/mysql"); //Añado el archivo mysql.js presente en la carpeta módulos */
const app = express(); //Inicializo express para el manejo de las peticiones

//this required before view engine setup
hbs.registerPartials(__dirname + '/views/partials');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(morgan("dev"));

app.use(express.static("public")); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set("view engine", "handlebars"); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

const server = app.listen(Listen_Port, function () {
  console.log(
    "Servidor NodeJS corriendo en http://localhost:" + Listen_Port + "/"
  );
});



class Usario {
  constructor(usuario, contraseña){
    this.usuario = usuario,
    this.contraseña = contraseña
  }

  getDatos(){
    return {usuario, contrasñea}
  }
}

const usuarios = []



app.get("/", function (req, res) {
  res.render("../views/home");
});

app.get("/login", function (req, res) {
  res.render("../views/login");
});

app.get("/register", function (req, res) {
  res.render("../views/register");
});


/* POST SON PARA POSTEAR */
/* Param */
app.post("/register", function (req, res) {
  const {usuario, contraseña} = req.body
  usuarios.push(new Usario(usuario, contraseña))
  res.sendStatus(200);
});

/* Body */
app.post("/login", function (req, res) {
  console.log(usuarios);
  if(req.body.usuario){
    for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].usuario === req.body.usuario){
        return res.sendStatus(200);
      }
    }
    res.sendStatus(304, "No se encontro usuario");
  }
});


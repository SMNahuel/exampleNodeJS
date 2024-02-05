const exphbs = require("express-handlebars"); //Para el manejo de los HTML
const morgan = require("morgan");
const bodyParser = require("body-parser"); //Para el manejo de los strings JSON
const express = require("express"); //Para el manejo del servidor Web
const hbs = require("hbs");
const path = require("path");
/* const MySQL = require("./modulos/mysql"); //Añado el archivo mysql.js presente en la carpeta módulos */
const app = express(); //Inicializo express para el manejo de las peticiones

//this required before view engine setup
hbs.registerPartials(__dirname + "/views/partials");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
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
  constructor(usuario, contraseña, name, email) {
    (this.usuario = usuario),
      (this.contraseña = contraseña),
      (this.email = email),
      (this.name = name);
  }

  getDatos() {
    return { usuario, contrasñea };
  }
}

const usuarios = [
  {
    email: "test@test.com",
    usuario: "lable",
    contraseña : "contraseña",
    name: "name",
     }
];

/* Aqui empiezan las peticiones que se pueden hacer */

/* PETICIONES GET */
/* Las vistas que podemos mostrar al usuario */
app.get("/", function (req, res) {
  return res.render("../views/home");
});

app.get("/login", function (req, res) {
  return res.render("../views/login");
});

app.get("/register", function (req, res) {
  return res.render("../views/register");
});

/* PETICIONES POST */

app.post("/register", function (req, res) {
  const { usuario, contraseña, email, name } = req.body;

  if (usuario === "" || contraseña === "") {
    return res.render("../views/errorPage");
  } else {
    usuarios.push(new Usario(usuario, contraseña, email, name));
    return res.render("../views/login");
  }
});

app.post("/login", function (req, res) {
  if (req.body.usuario !== "" && req.body.contraseña !== "") {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === req.body.usuario &&
        usuarios[i].contraseña === req.body.contraseña
      ) {
        return res.render("../views/home");
      }
    }
  } else {
    return res.render("../views/errorPage");
  }
});

/* PETICIONES PUT */
/* GET POST PUT Y DELETE */
app.put("/usuario", function (req, res) {
  const {email, contraseña, name, usuario} = req.body
  /*Aqui recorremos los usuarios  */
  for(let i = 0; i < usuarios.length; i++){
    /* Si el usuario que te pasaron existe en este arrya  */
    if(/* Aqui va tu codigo */){
      
    }
  }
});

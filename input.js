let connection;

let move;

const handleUserInput = function (key) {

  

  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w"){
    clearInterval(move);
    move = setInterval(function () {
      conn.write("Move: up");
    },100);
  }
  if (key === "a"){
    clearInterval(move);
    move = setInterval(function () {
      conn.write("Move: left");
    },100);
  }
  if (key === "s"){
    clearInterval(move);
    move = setInterval(function () {
      conn.write("Move: down");
    },100);
  }
  if (key === "d"){
    clearInterval(move);
    move = setInterval(function () {
      conn.write("Move: right");
    },100);
  }

  if (key === "1") {
    conn.write("Say: I like ham!")
  }
  if (key === "2") {
    conn.write("Say: Like and subscribe!")
  }
  if (key === "3") {
    conn.write("Say: Crunch Crunch")
  }

};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput: setupInput};
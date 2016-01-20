"use strict";

module.exports = function (app) {

  app.route("/getAuthedUser").get(function (req, res) {
    console.log("here is the req.user", req.user);
    res.status(200).json(req.user);
  });

  app.route("/logout").get(function (req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  });
};
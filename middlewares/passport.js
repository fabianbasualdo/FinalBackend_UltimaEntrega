const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { errorLogger } = require('../utils/logger/index');
const UserServices = require('../services/user.services')

const salt = () => bcrypt.genSaltSync(10);
const createHash = (password) => bcrypt.hashSync(password, salt());
const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

const userServices = new UserServices()

passport.use("login", new LocalStrategy(async (username, password, done) => {
  try {
    const theUser = await userServices.getUserByEmailService(username);
    if (!isValidPassword(theUser, password)) {
      errorLogger.error('Invalid user or password');
      return done(null, false);
    }

    //retorna al usuario
    return done(null, theUser);

    
  }
  catch (error) {
    errorLogger.error(error);
    return done(null, false);
  }
}));

passport.use("register", new LocalStrategy(
  { passReqToCallback: true },
  async (req, username, password, done) => {
    try {
      const usrObject = {
        email: username,
        password: createHash(password),
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        image: req.file.path,
      };
      const newUser = await userServices.createUserService(usrObject)
      return done(null, newUser);
    }
    catch (error) {
      errorLogger.error(error);
      return done(null, false);
    }
  }
));

// Serializacion
passport.serializeUser((user, done) => {
  done(null, user.email);
});

// Deserializacion
passport.deserializeUser(async (email, done) => {
  const user = await userServices.getUserByEmailService(email);
  done(null, user);
});

module.exports = passport;

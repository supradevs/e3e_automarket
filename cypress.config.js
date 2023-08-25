const { defineConfig } = require("cypress");
const db = require("./database/models");

module.exports = defineConfig({
  
  e2e: {
    experimentalOriginDependencies: true,
    baseUrl: 'http://127.0.0.1:3000',
    setupNodeEvents(on, config) {
      on('task', {
        async conex(message) {
          await db.sequelize.authenticate()
          const user = await db.User.findOne({where: {'email': 'eduardo@bitabit.com.ar'}})
          if(user) {
            console.log(user)
            await user.destroy()
          }else{
            console.log('no exite')
          }
          return null
        },
      })
      
      // implement node event listeners here
      
    },
  },
});

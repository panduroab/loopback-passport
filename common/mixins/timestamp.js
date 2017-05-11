module.exports = (Model, options) => {

  Model.beforeRemote('create', (context, model, next) => {
    let instance = context.req.body;
    instance.created = Date.now();
    instance.modified = Date.now();
    next();
  });

  Model.observe('before save', (context, next) => {
    if (!context.isNewInstance && context.currentInstance != undefined) {
      let instance = context.currentInstance || context.data;
      instance.modified = Date.now();
    }
    next();
  });

}
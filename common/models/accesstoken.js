module.exports = (Accesstoken) => {
  Accesstoken.observe('before save', function(ctx, next) {
    if (!ctx.instance) {
      return next();
    }
    ctx.instance.created = new Date();
    next();
  });
}
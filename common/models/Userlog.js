
module.exports = (Userlog) => {
    let excludedProperties = [
    'credentials',
    'challenges',
    'realm',
    'lastUpdated',
    'status',
    'emailVerified',
    'scopes'
  ];
  excludedProperties.forEach((property)=> {
    delete Userlog.definition.rawProperties[property];
    delete Userlog.definition.properties[property];
    delete Userlog.prototype[property];
  });
}
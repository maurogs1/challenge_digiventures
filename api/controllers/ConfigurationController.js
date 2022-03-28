class ConfigurationController {
  constructor(configurationService) {
    this.configurationService = configurationService;
  }

  /*
  returns:
    200 if configuration exists
    404 if configuration doesn't exists
  */
  get(req, res) {    

    const configuration =  this.configurationService.getById(req.params.path);
    console.log(req.params.path)
    if(configuration.data !== null) 
      return res.send(configuration.data );
    else{
     return res.status(404).send({'error': 'Configuration not found'});
    }
      
    

  }
}

module.exports = ConfigurationController;

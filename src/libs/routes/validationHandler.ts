export default (objData) => (req, res, next) => {
    const keys = Object.keys(objData);
    keys.forEach((key) => {
        console.log(`key----------${key}`);
      const item = objData[key];
      console.log(`item--------${JSON.stringify(item)}`)
     
      const value = item.in.map((items) => {
          console.log(`items--------${items}`);
          console.log(`key--------${key}`);
          console.log(`params--------${req.params}`)
          console.log(`query--------${req.query}`)
          console.log(`body--------${req.body}`)
          console.log(req[items][key]);
        return req[items][key];
      });
      console.log(`value--------${value}`)
      if (item && item.required) {
          console.log('inside required')
        const validateValue = value.filter((items) => item);
        console.log(validateValue);
        if (validateValue.length !== value.length) {
          next(notFound(`${item.errorMessage}`));
        }
      }

    });
    console.log('Before next')
    next();
  };
  function notFound(msg) {
    return { error: 'Bad request', message: msg, status: 400 };
  }
  